import { useState, useEffect } from "react";

const useLoginForm = (callback, validate) => {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    loginPassword: "",
  });

  const [loginerrors, setLoginerrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateLoginForm = (e) => {
    const { name, value } = e.target;
    setloginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    setLoginerrors(validate(loginCredentials));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(loginerrors).length === 0 && isSubmitting) {
      callback();
    }
  }, [loginerrors]);

  return { validateLoginForm, loginSubmit, loginCredentials, loginerrors };
};

export default useLoginForm;
