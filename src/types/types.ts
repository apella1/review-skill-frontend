import { ChangeEvent } from "react";

export type MenuItem = {
  title: string;
  link: string;
};

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// named properties to avoid a clash with mui's ButtonProps
export type ButtonProperties = {
  action?: () => void;
  title: string;
  bgColor: string;
  textColor: string;
  rounded?: boolean;
  full?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
};

export type SidebarLink = {
  title: string;
  link: string;
};

export type InputProps = {
  inputId: string;
  type: string;
  placeholder: string;
  value: string | number;
  label: string;
  name: string;
  validationError?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export type DBUSer = {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_image: File | null;
};
