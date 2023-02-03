import { useState, memo } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Folder,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Add,
  Delete,
} from "@mui/icons-material";

import FSList from "./FSList";

import { Item } from "../types";

type Props = {
  item: Item;
  openAddModal: (id: number, parentIDs: number[]) => void;
  openDeleteModal: (id: number, parentIDs: number[]) => void;
  parentIDs: number[];
};

function FSItem({ item, openAddModal, openDeleteModal, parentIDs }: Props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  function handleAddModal(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
    parentIDs: number[]
  ) {
    e.stopPropagation();
    openAddModal(id, parentIDs);
  }

  function handleDeleteModal(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number,
    parentIDs: number[]
  ) {
    e.stopPropagation();
    openDeleteModal(id, parentIDs);
  }

  return (
    <>
      {item.type === "folder" ? (
        <>
          <ListItemButton onClick={handleClick}>
            {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemIcon
              onClick={(e) => handleAddModal(e, item.id, parentIDs)}
            >
              <Add />
            </ListItemIcon>
            {!!parentIDs.length && (
              <ListItemIcon
                onClick={(e) => handleDeleteModal(e, item.id, parentIDs)}
              >
                <Delete />
              </ListItemIcon>
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <FSList
              items={item.children}
              parentIDs={[...parentIDs, item.id]}
              openAddModal={openAddModal}
              openDeleteModal={openDeleteModal}
            />
          </Collapse>
        </>
      ) : (
        <ListItemButton>
          <ListItemIcon>{}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      )}
    </>
  );
}

export default memo(FSItem);
