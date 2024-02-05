import { ChangeEvent } from "react";

export interface MenuItem {
  title: string;
  link: string;
}

export interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

// named properties to avoid a clash with mui's ButtonProps
export interface ButtonProperties {
  action?: () => void;
  title: string;
  bgColor: string;
  textColor: string;
  rounded?: boolean;
  full?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
}

export interface SidebarLink {
  title: string;
  link: string;
}

export interface InputProps {
  inputId: string;
  type: string;
  placeholder: string;
  value: string | number;
  label: string;
  name: string;
  validationError?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface DBUser {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image: File | null;
}
export interface CardSummary {
  title: string;
  value: number;
}
