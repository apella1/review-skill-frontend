import { DashboardLayout, ProtectedLayout } from "../../layouts";

export default function DashboardSettings() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <div>Dashboard Settings</div>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
