import { Button, Stack, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../../layouts";
import { useState } from "react";
import { UserData } from "../../../types/types";
import { Link } from "react-router-dom";
import { client } from "../../../axios/axios";

export default function SignUp() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await client.post("/auth/sign-up", formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <section className="py-16 px-28">
        <Stack spacing={4}>
          <Stack className="">
            <Button>Sign Up With Google</Button>
            <Button>Sign Up With GitHub</Button>
          </Stack>
          <form action="" className="flex flex-col space-y-4 w-full">
            <TextField
              required
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              required
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              required
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              required
              label="Confirm Password"
              type="password"
              name="passwordConfirm"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Typography className="self-center">
              By signing up you agree to our Terms of Service and Privacy Policy
            </Typography>
            <Button onClick={() => handleRegistration}>Create Account</Button>
          </form>
          <section className="flex items-center space-x-2 self-center">
            <Typography>Already Have an Account?</Typography>
            <Link to="/auth/login" className="text-blue-600">
              Log In
            </Link>
          </section>
        </Stack>
      </section>
    </AuthLayout>
  );
}
