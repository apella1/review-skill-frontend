import { DashboardLayout, ProtectedLayout } from "../../layouts";

export default function DashboardNotes() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <div>DashboardNotes</div>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
