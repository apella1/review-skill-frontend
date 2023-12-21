import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8">
      <Stack direction="row" className="space-x-1">
        <Typography>&copy; {new Date().getFullYear()} ReviewSkill</Typography>
      </Stack>
      <div className="flex items-center space-x-8">
        <Link to="/terms-of-service">
          <Typography>Terms of Service</Typography>
        </Link>
        <Link to="/privacy-policy">
          <Typography>Privacy Policy</Typography>
        </Link>
      </div>
    </footer>
  );
}
