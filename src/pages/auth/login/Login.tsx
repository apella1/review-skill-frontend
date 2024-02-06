import { Stack, TextField, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { client } from "../../../axios/axios";
import { CustomButton } from "../../../components";
import { AuthLayout } from "../../../layouts";

interface LoginData {
  email: string;
  password: string;
}

interface ErrorResponse {
  error: string;
}

interface LoginResponse {
  token: string;
}

interface LocationState {
  from: string;
}
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

  const loginUser = async () => {
    setLoading(true);
    setError(null);
    try {
      await client
        .post("login", formData)
        .then((res: AxiosResponse<LoginResponse>) => {
          if (res.status === 200) {
            const token = res.data.token;
            localStorage.setItem("token", token);
            if (location.state && "from" in location.state) {
              const state = location.state as LocationState;
              navigate(state.from);
            } else {
              navigate("/dashboard/summary");
            }
          } else {
            throw new Error("Invalid server response.");
          }
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          const errMsg = err.response?.data.error;
          setError(
            typeof errMsg === "string"
              ? errMsg
              : "An unexpected error occurred. Please try again.",
          );
        });
    } catch (error: unknown) {
      setError("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser().catch((err) => {
      console.error(err);
    });
  };

  return (
    <AuthLayout>
      <section className="xl:py-32 py-16 xl:px-28 md:px-16 px-8 w-full flex flex-col justify-center">
        <Stack spacing={4}>
          {/* <Stack spacing={2} className="">
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FcGoogle className="text-2xl" />
              <p>Log In With Google</p>
            </div>
            <div className="w-full py-3 flex items-center space-x-6 justify-center border border-gray-200">
              <FaGithub className="text-2xl" />
              <p>Log In With GitHub</p>
            </div>
          </Stack> */}
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
            <Typography>Don&apos;t Have an Account?</Typography>
            <Link to="/auth/sign-up" className="text-blue-600">
              Sign Up
            </Link>
          </section>
        </Stack>
      </section>
    </AuthLayout>
  );
}
