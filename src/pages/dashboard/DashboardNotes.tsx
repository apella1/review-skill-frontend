import DashboardLayout from "@/layouts/dashboard-layout";
import ProtectedLayout from "@/layouts/protected-layout";

export default function DashboardNotes() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <div>DashboardNotes</div>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
