import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";

export const StyledWrap = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #252525;
  width: 434px;
`;

export const StyledHeader = styled(Stack)`
  background-color: #2a2a2a;
  align-items: center;
  color: #fff;
  padding: 12px 15px;
  .MuiSvgIcon-root {
    font-size: 12px;
  }
`;

export const StyledHeaderTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  flex: 1;
`;

export const StyledMain = styled(Box)`
  padding: 12px;
`;

export const StyledCloseIcon = styled(Close)`
  cursor: pointer;
`;
