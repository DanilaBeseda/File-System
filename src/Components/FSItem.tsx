import { useState, memo } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Folder,
  Movie,
  KeyboardArrowDown,
  KeyboardArrowRight,
  AddBox,
  Delete,
} from "@mui/icons-material";
import styled from "@emotion/styled";

import FSList from "./FSList";

import { Item } from "../types";

const StyledListItemButton = styled(ListItemButton)`
  :hover {
    background-color: #2e2e2e;
  }
`;

const StyledListItemText = styled(ListItemText)`
  & span {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #cecece;
  }
`;

const StyledTypeIcon = styled(ListItemIcon)`
  color: #ffebb7;
  min-width: 12px;
  margin-right: 8px;
  .MuiSvgIcon-root {
    font-size: 14px;
  }
`;

const StyledСorrectionIcon = styled(ListItemIcon)`
  color: #b7b7b7;
  min-width: 12px;
  .MuiSvgIcon-root {
    font-size: 12px;
  }
`;

const StyledArrowIcon = styled(ListItemIcon)`
  min-width: 6px;
  .MuiSvgIcon-root {
    color: #cecece;
    font-size: 12px;
  }
`;

const StyledAddBox = styled(AddBox)`
  margin-right: 3px;
`;

type Props = {
  item: Item;
  openAddModal: (id: number, parentIDs: number[]) => void;
  openDeleteModal: (id: number, parentIDs: number[]) => void;
  parentIDs: number[];
};

/**
 * parentIDs хранит id всех родителей [id1,id2, ... , idn], благодаря чему,
 * за линейное время можно найти узел в дереве,
 * который нужно удалить или в который нужно что-то добавить
 */
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
          <StyledListItemButton
            onClick={handleClick}
            sx={{ pl: `${16 * (parentIDs.length + 1)}px` }}
          >
            <StyledArrowIcon>
              {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
            </StyledArrowIcon>
            <StyledTypeIcon>
              <Folder />
            </StyledTypeIcon>
            <StyledListItemText primary={item.name} />
            <StyledСorrectionIcon
              onClick={(e) => handleAddModal(e, item.id, parentIDs)}
            >
              <StyledAddBox />
            </StyledСorrectionIcon>
            {!!parentIDs.length && (
              <StyledСorrectionIcon
                onClick={(e) => handleDeleteModal(e, item.id, parentIDs)}
              >
                <Delete />
              </StyledСorrectionIcon>
            )}
          </StyledListItemButton>
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
        <StyledListItemButton sx={{ pl: `${16 * (parentIDs.length + 2)}px` }}>
          <StyledTypeIcon>
            <Movie />
          </StyledTypeIcon>
          <StyledListItemText primary={item.name} />
          <StyledСorrectionIcon
            onClick={(e) => handleDeleteModal(e, item.id, parentIDs)}
          >
            <Delete />
          </StyledСorrectionIcon>
        </StyledListItemButton>
      )}
    </>
  );
}

export default memo(FSItem);
