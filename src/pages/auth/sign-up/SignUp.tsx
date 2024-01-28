import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { client } from "../../../axios/axios";
import { CustomButton } from "../../../components";
import { AuthLayout } from "../../../layouts";
import { UserData } from "../../../types/types";

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
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await client.post("create_user", formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <section className="py-16 px-8 md:px-16 2xl:px-28">
        <Stack spacing={4}>
          <Stack spacing={2} className="">
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FcGoogle className="text-2xl" />
              <p>Sign Up With Google</p>
            </div>
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FaGithub className="text-2xl" />
              <p>Sign Up With GitHub</p>
            </div>
          </Stack>
          <form
            action=""
            className="flex flex-col space-y-4 w-full"
            onSubmit={handleRegistration}
          >
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
            <CustomButton
              button={{
                title: "Sign Up",
                bgColor: "bg-[#035afc]",
                textColor: "text-white",
                full: true,
                type: "submit",
              }}
            />
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
