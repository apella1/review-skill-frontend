import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

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
