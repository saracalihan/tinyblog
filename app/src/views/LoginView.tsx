import { Link, useNavigate } from "react-router-dom";
import Button from "../components/inputs/Button";
import TextInput from "../components/inputs/TextInput";
import { useState } from "react";
import { ILoginPost, ILoginResponse } from "../interfaces";
import api from "../api";
import useAuthStore from "../stores/authStore";

const LoginView = () => {
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const [state, setState] = useState<ILoginPost>({
    email: "",
    password: "",
  });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data } = await api.user.login(state);
    authStore.set(data as ILoginResponse);
    navigate("/");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  return (
    <div className="border border-neutral-200 p-8 rounded min-w-[500px]">
      <h2 className="font-semibold text-lg text-neutral-800 text-center">
        Login to your account
      </h2>

      <form className="py-8 flex flex-col gap-4" onSubmit={handleLogin}>
        <TextInput
          label="E-mail or username"
          placeholder="Type your e-mail address or username"
          value={state.email}
          onChange={(event) => handleChange(event, "email")}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="The most secret thing on earth"
          value={state.password}
          onChange={(event) => handleChange(event, "password")}
        />
        <Button type="submit">Login</Button>
      </form>

      <div className="text-center">
        <Link
          to="/auth/register"
          className="text-neutral-600 hover:underline hover:text-neutral-950"
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default LoginView;