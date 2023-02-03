import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

import { CurrentItem } from "../../types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  addItem: (name: string, currentItem: CurrentItem) => void;
  currentItem: CurrentItem;
};

function AddModal({ addItem, currentItem }: Props) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputValue(e.target.value);
  }

  function handleAddButton() {
    addItem(inputValue, currentItem);
  }

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
      <Box>
        <TextField value={inputValue} onChange={handleInput} />
        <Button onClick={handleAddButton}>Add shot</Button>
      </Box>
    </Box>
  );
}

export default AddModal;
