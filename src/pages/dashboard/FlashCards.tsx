import { DashboardLayout, ProtectedLayout } from "../../layouts";

export default function FlashCards() {
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <div>FlashCards</div>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
