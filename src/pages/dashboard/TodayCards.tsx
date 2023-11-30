import { Stack } from "@mui/material";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { FcInfo } from "react-icons/fc";

export default function TodayCards() {
  const cards = [];
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section
          className={`${
            cards.length === 0 && "flex items-center justify-center"
          } h-full`}
        >
          {cards.length === 0 ? (
            <Stack justifyContent={"center"} alignItems={"center"}>
              <FcInfo className="text-3xl"/>
              <p>No cards due today</p>
              <p>Have a good day!</p>
            </Stack>
          ) : (
            <Stack>
              <p>Cards go here!</p>
            </Stack>
          )}
        </section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
