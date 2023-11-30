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
};
