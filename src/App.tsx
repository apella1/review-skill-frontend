import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Home, Login, SignUp } from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
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
