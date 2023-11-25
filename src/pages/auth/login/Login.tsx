import { Button, Stack, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../../layouts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { client } from "../../../axios/axios";

type LoginData = {
  email: string;
  password: string;
};
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await client.post("/auth/login", formData);
      console.log(res);
      setTimeout(() => navigate("/dashboard"), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <section className="py-32 px-28 flex flex-col justify-center">
        <Stack spacing={4}>
          <Stack className="">
            <Button>Login With Google</Button>
            <Button>Login With GitHub</Button>
          </Stack>
          <form action="" className="flex flex-col space-y-4 w-full">
            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button onClick={() => handleLogin}>Login</Button>
          </form>
          <section className="flex items-center space-x-2 self-center">
            <Typography>Don't Have an Account?</Typography>
            <Link to="/auth/sign-up" className="text-blue-600">
              Sign Up
            </Link>
          </section>
        </Stack>
      </section>
    </AuthLayout>
  );
}
