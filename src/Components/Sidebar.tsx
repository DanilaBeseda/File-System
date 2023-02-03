import { memo } from "react";
import { Drawer } from "@mui/material";
import styled from "@emotion/styled";

const StyledDrawer = styled(Drawer)`
  background-color: #161616;
  .MuiDrawer-paper {
    min-width: 250px;
    max-width: 250px;
    background-color: #252525;
    box-shadow: none;
  }
`;

type Props = {
  children: any;
  anchor: "bottom" | "left" | "right" | "top" | undefined;
  open: boolean;
  hideBackdrop: boolean;
};

function Sidebar({ children, anchor, open, hideBackdrop }: Props) {
  return (
    <StyledDrawer anchor={anchor} open={open} hideBackdrop={hideBackdrop}>
      {children}
    </StyledDrawer>
  );
}

export default memo(Sidebar);
