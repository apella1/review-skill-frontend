import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import homeHeader from "/src/assets/images/home-header.png";

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <header className="h-screen py-8 flex">
      <Stack spacing={1} className="basis-1/2">
        <Typography variant="h1" component="h1">
          ReviewSkill
        </Typography>
        <Typography variant="h4">
          Spaced Repetition Tools To Enhance Your Career
        </Typography>
        <Typography variant="h4">
          Build Your Skills In a Science-Based Way
        </Typography>
        <Button onClick={() => navigate("/auth/sign-up")}>
          Get Started
        </Button>
      </Stack>
      <Stack>
        <img src={homeHeader} alt="" />
      </Stack>
    </header>
  );
}
