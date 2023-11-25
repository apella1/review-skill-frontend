import { Footer, Navbar } from "../components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-32 py-8">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
