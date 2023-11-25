import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Home,
  Login,
  PrivacyPolicy,
  SignUp,
  TermsOfService,
} from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
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
