export default function ValidateRegister(values) {
  let registererrors = {};

  if (!values.firstName) {
    registererrors.firstName = "required";
  }

  if (!values.lastName) {
    registererrors.lastName = "required";
  }

  if (!values.email) {
    registererrors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    registererrors.email = "Email address is invalid";
  }

  if (!values.registerPassword) {
    registererrors.registerPassword = "Password is required";
  } else if (values.registerPassword.length < 6) {
    registererrors.password = "Password needs to be 6 characters or more";
  }

  return registererrors;
}
