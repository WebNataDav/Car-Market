import { IconButton, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import styles from "./styles.module.scss";

type IconProps = {
  icon: ReactElement;
  ariaLabel: string;
  title?: string;
  onClick?: () => void;
};

const IconActionButton = ({ icon, ariaLabel, title, onClick }: IconProps) => (
  <Tooltip title={title || ""}>
    <IconButton
      className={styles.iconButton}
      sx={{
        backgroundColor: "var(--border-light)",
        color: "var(icon-secondary)",
        borderRadius: "6px",
      }}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

export default IconActionButton;
