import { memo } from "react";
import { List } from "@mui/material";

import FSItem from "./FSItem";

import { Item } from "../types";

type Props = {
  items: any;
  openAddModal: (id: number, parentIDs: number[]) => void;
  openDeleteModal: (id: number, parentIDs: number[], name: string) => void;
  parentIDs?: number[];
};

function FSList({
  items,
  openAddModal,
  openDeleteModal,
  parentIDs = [],
}: Props) {
  return (
    <List>
      {items?.map((item: Item) => (
        <FSItem
          key={item.id}
          item={item}
          parentIDs={parentIDs}
          openAddModal={openAddModal}
          openDeleteModal={openDeleteModal}
        />
      ))}
    </List>
  );
}

export default memo(FSList);
