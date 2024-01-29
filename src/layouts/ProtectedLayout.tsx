import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login", { state: { from: location } });
    }
  }, [navigate, location]);
  return <section>{children}</section>;
}
