export const serializeUser = (user, message) => {
  const { _id, name, position, email, subject } = user;
  return {
    status: true,
    message: `User ${message} successful`,
    data: {
      _id,
      name,
      position,
      email,
      subject,
    },
  };
};

export const serializeUserRegistration = (user) => {
  const result = serializeUser(user, "registration");
  return result;
};
export const serializeUserUpdate = (user) => {
  const result = serializeUser(user, "update");
  return result;
};

export const serializeUserFetch = (user) => {
  const result = serializeUser(user, "Fetch");
  return result;
};
