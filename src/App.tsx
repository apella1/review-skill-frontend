import { store } from "@/app/store";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/dashboard-layout";
import RootLayout from "./layouts/root-layout";
import Login from "./pages/auth/login/login";
import SignUp from "./pages/auth/sign-up/signup";
import DashboardNotes from "./pages/dashboard/dashboard-notes";
import DashboardSettings from "./pages/dashboard/dashboard-settings";
import FlashCards from "./pages/dashboard/flashcards";
import LearningSummary from "./pages/dashboard/learning-summary";
import TodayCards from "./pages/dashboard/TodayCards";
import Docs from "./pages/docs/Docs";
import Home from "./pages/home/Home";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import TermsOfService from "./pages/policy/TermsOfService";

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

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
