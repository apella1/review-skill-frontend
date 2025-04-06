import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <section className="px-8 lg:px-16 2xl:px-32 py-8">
      <Navbar />
      <main className="py-8 flex flex-col min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
