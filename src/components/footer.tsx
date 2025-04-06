import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8">
      <div className="flex items-center space-x-1">
        <p className="text-sm text-foreground">
          &copy; {new Date().getFullYear()} ReviewSkill
        </p>
      </div>
      <div className="flex items-center space-x-8">
        <Link
          to="/terms-of-service"
          className="text-sm text-foreground hover:text-primary transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          to="/privacy-policy"
          className="text-sm text-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
