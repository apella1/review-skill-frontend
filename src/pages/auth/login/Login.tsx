import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../../../axios/axios";
import { CustomButton } from "../../../components";
import { AuthLayout } from "../../../layouts";

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
      setTimeout(() => navigate("/dashboard/summary"), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <section className="py-32 px-28 flex flex-col justify-center">
        <Stack spacing={4}>
          <Stack spacing={2} className="">
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FcGoogle className="text-2xl" />
              <p>Log In With Google</p>
            </div>
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FaGithub className="text-2xl" />
              <p>Log In With GitHub</p>
            </div>
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
            <CustomButton
              button={{
                title: "Login",
                bgColor: "bg-[#035afc]",
                textColor: "text-white",
                action: () => handleLogin,
                full: true,
              }}
            />
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
