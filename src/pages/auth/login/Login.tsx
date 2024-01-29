import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { client } from "../../../axios/axios";
import { CustomButton } from "../../../components";
import { AuthLayout } from "../../../layouts";

type LoginData = {
  email: string;
  password: string;
};
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
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
    setLoading(true);
    setError(null);
    try {
      try {
        const res = await client.post("login", formData);
        if (res.data && res.data.token) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          if (location.state?.from) {
            navigate(location.state.from);
          } else {
            navigate("/dashboard/summary");
          }
        } else {
          throw new Error("Invalid server response.");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <section className="xl:py-32 py-16 xl:px-28 md:px-16 px-8 w-full flex flex-col justify-center">
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
          <form
            action=""
            className="flex flex-col space-y-4 w-full"
            onSubmit={handleLogin}
          >
            {error && (
              <p className="text-red-700 text-base text-center">{error}</p>
            )}
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
            <CustomButton
              button={{
                title: "Login",
                bgColor: "bg-[#035afc]",
                textColor: "text-white",
                type: "submit",
                full: true,
                disabled: loading,
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
