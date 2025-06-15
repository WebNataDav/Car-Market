import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import styles from "./styles.module.scss";

export interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick, ...props }: ButtonProps) => (
  <MuiButton
    className={styles.button}
    onClick={onClick}
    sx={{
      backgroundColor: "var(--primary-main)",
      color: "var(--primary-light)",
    }}
    {...props}
  >
    {children}
  </MuiButton>
);

export default Button;
