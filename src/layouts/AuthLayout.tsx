import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import authImg from "/src/assets/images/auth.jpg";
import { AiFillHome } from "react-icons/ai";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack className="h-screen lg:fixed">
      <Stack direction="row">
        <Box className="hidden lg:block lg:basis-1/2 lg:w-full lg:overflow-y-hidden">
          <img src={authImg} alt="" className="" />
        </Box>
        <Stack className="lg:basis-1/2 w-full p-8">
          <nav className="font-semibold text-[16px] pb-8 self-center">
            <Link to="/" className="text-[#035afc]">
              <AiFillHome className="text-4xl font-bold" />
              <p>Home</p>
            </Link>
          </nav>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
