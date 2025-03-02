type ErrorProp = {
  status?: number;
  data?: {
    title?: string;
    status?: number;
    traceId?: string;
    type?: string;
  };
};

export default ErrorProp;
