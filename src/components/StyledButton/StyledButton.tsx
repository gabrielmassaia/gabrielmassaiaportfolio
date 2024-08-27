import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, href, download }) => {
  const Button = styled("a")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid  ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }));

  return (
    <Button href={href} onClick={onClick} download={download}>
      {children}
    </Button>
  );
}

export default StyledButton;
