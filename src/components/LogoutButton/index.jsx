import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/authSlice";
import { StyledLogoutButton } from "./style";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <StyledLogoutButton variant="contained" onClick={onLogout}>
      Log Out
    </StyledLogoutButton>
  );
}
