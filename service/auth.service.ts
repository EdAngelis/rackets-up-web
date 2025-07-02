type Response = {
  message: string;
  data: any;
  status: number;
};

const verifyEmail = async (code: string): Promise<Response> => {
  const response = await fetch(`/api/proxy?path=auth/validate-email/${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const sendResetPasswordToken = async (email: string): Promise<Response> => {
  const response = await fetch(
    `/api/proxy?path=auth/send-reset-password-token/${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

const resetPassword = async (
  token: string,
  newPassword: string
): Promise<Response> => {
  console.log("Resetting", newPassword);
  const response = await fetch(`/api/proxy?path=auth/reset-password/${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newPassword }),
  });
  const data = await response.json();
  return data;
};

export { verifyEmail, sendResetPasswordToken, resetPassword };
