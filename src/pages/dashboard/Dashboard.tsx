import { DashboardLayout, ProtectedLayout } from "../../layouts";

export default function Dashboard() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section>Dashboard</section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
