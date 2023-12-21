import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex space-x-8">
      <Stack direction="row" spacing={4}>
        <Typography>Learn Efficiently With ReviewSkill</Typography>
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
