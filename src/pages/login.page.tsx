import { ChangeEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import Header from "../components/header.component";
import FormInput from "../components/form-input.component";

import { useDispatch } from "react-redux";
import { LOGIN_MUTATION } from "../utils/GQL";
import { CONSTANTS } from "../utils/CONSTANTS";
import { setCurrentUser } from "../redux/user/user.slice";

const defaultFormFields = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: {
      username,
      password,
    },
    onCompleted: ({ login }) => {
      const { access_token, refresh_token, user } = login;
      dispatch(setCurrentUser({ accessToken: access_token, refreshToken: refresh_token, user: user }));
      localStorage.setItem(CONSTANTS.AUTH_TOKEN, access_token);
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
              type='password'
              name='password'
              onChange={handleChange}
              value={password}
              required
              placeholder='password'
            />
            <button className='text-2xl mt-6 w-1/3 h-12 flex no-wrap justify-center items-center shrink-0 text-primary bg-secondary rounded-md'>
              {loading ? `...` : `Login`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
