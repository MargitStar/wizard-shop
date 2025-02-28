import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../utils/authSlice";
import LoginContent from "../../components/LoginContent";
import { useNavigationContext } from "../../../../context";
import { PAGES, PagesEnum } from "../../../../constants";

const LoginContainer = () => {
  const { error, isAuthorized } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const { handleItemClick: handleNavigation } = useNavigationContext();
  const homePage = PAGES.find((item) => item.page === PagesEnum.HOME);

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthorized) {
      handleNavigation(homePage?.route, homePage?.page);
    }
  }, [isAuthorized, handleNavigation, homePage]);

  return (
    <LoginContent
      error={error}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
