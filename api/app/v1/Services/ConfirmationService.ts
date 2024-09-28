export const getConfirmationLink = (secret: string, code: string) => {
  return `${process.env.DOMAIN}/confirm/email/${secret}/${code}`;
};

export const getPasswordResetLink = (secret: string, code: string) => {
  return `${process.env.DOMAIN}/confirm/reset-password/${secret}/${code}`;
};
