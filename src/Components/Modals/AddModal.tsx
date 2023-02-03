import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";

import { CurrentItem } from "../../types";

import {
  StyledWrap,
  StyledHeader,
  StyledHeaderTitle,
  StyledMain,
  StyledCloseIcon,
} from "./styles";

const StyledHeaderAddBox = styled(AddBox)`
  color: #b7b7b7;
  padding-right: 5px;
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: #cecece;
  margin-bottom: 10px;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  margin-right: 6px;
  .MuiInputBase-input {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    background-color: #232323;
    color: #e2e2e2;
    max-height: 25px;
    padding: 4px 0 4px 18px;
  }

  fieldset {
    border-color: #333;
    border-radius: 3px;
  }
`;

const StyledButton = styled(Button)`
  text-transform: none;
  background-color: #00ffbe;
  color: #353535;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  border-radius: 3px;
  padding: 0, 8.5px;
  :hover {
    color: #e2e2e2;
  }
`;

const StyledMainAddBox = styled(AddBox)`
  font-size: 12px;
  margin-right: 5px;
`;

type Props = {
  addItem: (name: string, currentItem: CurrentItem) => void;
  currentItem: CurrentItem;
  cancel: () => void;
};

function AddModal({ addItem, currentItem, cancel }: Props) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputValue(e.target.value);
  }

  function handleAddButton() {
    addItem(inputValue, currentItem);
  }

  function handleCancel() {
    cancel();
  }

  return (
    <StyledWrap>
      <StyledHeader direction="row">
        <StyledHeaderAddBox />
        <StyledHeaderTitle>Add shot</StyledHeaderTitle>
        <StyledCloseIcon onClick={handleCancel} />
      </StyledHeader>

      <StyledMain>
        <StyledDescription>Enter the name:</StyledDescription>
        <Stack direction="row">
          <StyledTextField value={inputValue} onChange={handleInput} />
          <StyledButton onClick={handleAddButton}>
            <StyledMainAddBox />
            Add shot
          </StyledButton>
        </Stack>
      </StyledMain>
    </StyledWrap>
  );
}

export default AddModal;
