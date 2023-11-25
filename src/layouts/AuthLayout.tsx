import { Box, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import authImg from "/src/assets/images/auth.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <Stack className="h-screen fixed">
      <nav className="flex justify-between items-center p-8">
        <Link to="/">ReviewSkill</Link>
        <div className="flex items-center space-x-6 text-[17px] leading-[22px] font-medium">
          <Link
            to="/auth/sign-up"
            className={`${
              location.pathname === "/auth/sign-up" ? "text-blue-400" : ""
            }`}
          >
            Sign Up
          </Link>
          <Link
            to="/auth/login"
            className={`${
              location.pathname === "/auth/login" ? "text-blue-400" : ""
            }`}
          >
            Log In
          </Link>
        </div>
      </nav>
      <Stack direction="row">
        <Box className="basis-1/2 w-full overflow-y-hidden">
          <img src={authImg} alt="" className="" />
        </Box>
        <Box className="basis-1/2">{children}</Box>
      </Stack>
    </Stack>
  );
}
