import { store } from "@/app/store";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/dashboard-layout";
import RootLayout from "./layouts/root-layout";
import Login from "./pages/auth/login/login";
import SignUp from "./pages/auth/sign-up/signup";
import DashboardSettings from "./pages/dashboard/dashboard-settings";
import FlashCards from "./pages/dashboard/flashcards";
import LearningNotes from "./pages/dashboard/learning-notes";
import LearningSummary from "./pages/dashboard/learning-summary";
import TodayCards from "./pages/dashboard/TodayCards";
import Docs from "./pages/docs/docs";
import Home from "./pages/home/home";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import TermsOfService from "./pages/policy/TermsOfService";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "docs",
        children: [
          { path: "", element: <Docs /> },
          { path: ":slug", element: <Docs /> },
        ],
      },
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
      { path: "/dashboard/notes", element: <LearningNotes /> },
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
