import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "..";
import homeHeader from "/src/assets/images/home-header.png";

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <header className="h-screen py-8 flex">
      <Stack spacing={1} className="basis-1/2 pt-16">
        <h1 className="text-[60px] leading-[44px]">ReviewSkill</h1>
        <h2 className="text-[30px] leading-[44px]">
          Spaced Repetition Tools To Enhance Your Career
        </h2>
        <h2 className="text-[30px] leading-[44px]">
          Build Your Skills In a Science-Based Way
        </h2>
        <CustomButton
          button={{
            title: "Get Started",
            bgColor: "bg-[#035afc]",
            textColor: "text-white",
            action: () => navigate("/auth/sign-up"),
            rounded: true,
          }}
        />
      </Stack>
      <Stack>
        <img src={homeHeader} alt="" />
      </Stack>
    </header>
  );
}
