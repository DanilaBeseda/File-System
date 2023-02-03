import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

import { CurrentItem } from "../../types";

import {
  StyledCloseIcon,
  StyledHeader,
  StyledHeaderTitle,
  StyledMain,
  StyledWrap,
} from "./styles";

const StyledHeaderDeleteIcon = styled(Delete)`
  color: #b7b7b7;
  padding-right: 5px;
`;

const StyledDescription = styled.p`
  margin: 0;
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: #cecece;
  margin-bottom: 5px;
`;

const StyledButtonContainer = styled(Stack)`
  padding-top: 12px;
`;

const StyledCancelButton = styled(Button)`
  flex: 1;
  text-transform: none;
  background-color: #3d3d3d;
  color: #bfbfbf;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 3px;
  padding: 5, 0px;
  height: 25px;
  margin-right: 7px;
  :hover {
    color: #e2e2e2;
  }
`;

const StyledDeleteButton = styled(Button)`
  flex: 1;
  text-transform: none;
  background-color: #ff005c;
  color: #353535;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 3px;
  padding: 5, 0px;
  height: 25px;
  :hover {
    color: #e2e2e2;
  }
`;

const StyledMainDeleteIcon = styled(Delete)`
  font-size: 12px;
  margin-right: 5px;
`;

const StyledStrong = styled.strong`
  text-transform: uppercase;
`;

type Props = {
  currentItem: CurrentItem;
  deleteItem: (currentItem: CurrentItem) => void;
  cancel: () => void;
};

function DeleteModal({ currentItem, deleteItem, cancel }: Props) {
  function handleDeleteButton() {
    deleteItem(currentItem);
  }

  function handleCancel() {
    cancel();
  }

  return (
    <StyledWrap>
      <StyledHeader direction="row">
        <StyledHeaderDeleteIcon />
        <StyledHeaderTitle>Delete sequence</StyledHeaderTitle>
        <StyledCloseIcon onClick={handleCancel} />
      </StyledHeader>

      <StyledMain>
        <StyledDescription>
          The sequence <StyledStrong>{currentItem.name}</StyledStrong> and
          related objects will be permanently deleted and cannot be restored.
        </StyledDescription>
        <StyledDescription>
          Are you sure you want to continue?
        </StyledDescription>
        <StyledButtonContainer direction="row">
          <StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
          <StyledDeleteButton onClick={handleDeleteButton}>
            <StyledMainDeleteIcon /> Delete
          </StyledDeleteButton>
        </StyledButtonContainer>
      </StyledMain>
    </StyledWrap>
  );
}

export default DeleteModal;
