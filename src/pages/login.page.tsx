import { ChangeEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-apollo";

import Header from "../components/header.component";
import FormInput from "../components/form-input.component";

import { LOGIN_MUTATION } from "../utils/GQL";
import { CONSTANTS } from "../utils/CONSTANTS";

const defaultFormFields = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      username,
      password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(CONSTANTS.AUTH_TOKEN, login.access_token);
      navigate("/");
    },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit: FormEventHandler = (e: ChangeEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <Header />
      <div className='flex justify-center items-center h-screen '>
        <div className='w-1/3 '>
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='username'
              onChange={handleChange}
              value={username}
              required
              placeholder='username'
            />
            <FormInput
              type='text'
              name='password'
              onChange={handleChange}
              value={password}
              required
              placeholder='password'
            />
            <button className='text-2xl mt-6 w-1/3 h-16 flex no-wrap justify-center items-center shrink-0 text-primary bg-secondary'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
