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
        <Link to="/terms-of-service">Terms Of Service</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
