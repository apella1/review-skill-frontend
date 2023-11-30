import { DashboardLayout, ProtectedLayout } from "../../layouts";

export default function TodayCards() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section>TodayCards</section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
