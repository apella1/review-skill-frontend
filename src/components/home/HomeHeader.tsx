import { useNavigate } from "react-router-dom";
import { CustomButton } from "..";

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <header className="lg:h-screen lg:py-8 flex flex-col">
      <section className="lg:pt-8 2xl:pt-16 self-center flex flex-col space-y-3">
        <h1 className="text-3xl lg:text-5xl 2xl:text-6xl self-center text-center">
          ReviewSkill
        </h1>
        <div className="text-lg lg:text-xl 2xl:text-3xl flex flex-col space-y-3">
          <h2>Spaced Repetition Tools To Enhance Your Career</h2>
          <h2>Build Your Skills In a Science-Based Way</h2>
        </div>
        <div className="self-center">
          <CustomButton
            button={{
              title: "Get Started",
              bgColor: "bg-[#035afc]",
              textColor: "text-white",
              action: () => {
                navigate("/auth/sign-up");
              },
              rounded: true,
            }}
          />
        </div>
      </section>
    </header>
  );
}
