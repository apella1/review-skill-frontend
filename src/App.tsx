import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import Login from "./pages/auth/login/login";
import SignUp from "./pages/auth/sign-up/signup";
import DashboardNotes from "./pages/dashboard/DashboardNotes";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import FlashCards from "./pages/dashboard/FlashCards";
import TodayCards from "./pages/dashboard/TodayCards";
import Docs from "./pages/docs/Docs";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import TermsOfService from "./pages/policy/TermsOfService";
import Home from "./pages/home/Home";
import LearningSummary from "./pages/dashboard/learning-summary";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/docs", element: <Docs /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/sign-up", element: <SignUp /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/summary", element: <LearningSummary /> },
      { path: "/dashboard/today", element: <TodayCards /> },
      { path: "/dashboard/notes", element: <DashboardNotes /> },
      { path: "/dashboard/flashcards", element: <FlashCards /> },
      { path: "/dashboard/settings", element: <DashboardSettings /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
