import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  DashboardNotes,
  DashboardSettings,
  Docs,
  FlashCards,
  Home,
  Login,
  PrivacyPolicy,
  SignUp,
  TermsOfService,
  TodayCards,
} from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/docs", element: <Docs /> },
  { path: "/dashboard/summary", element: <Dashboard /> },
  { path: "/dashboard/today", element: <TodayCards /> },
  { path: "/dashboard/notes", element: <DashboardNotes /> },
  { path: "/dashboard/flashcards", element: <FlashCards /> },
  { path: "/dashboard/settings", element: <DashboardSettings /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/sign-up", element: <SignUp /> },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
