import { useCallback, useState } from "react";

import FSList from "./Components/FSList";
import AddModal from "./Components/Modals/AddModal";
import DeleteModal from "./Components/Modals/DeleteModal";
import FSModal from "./Components/FSModal";
import Sidebar from "./Components/Sidebar";

import { data as fetchedData } from "./db";
import createNewTreeAndAddNode from "./utils/createNewTreeAndAddNode";
import createNewTreeAndDeleteNode from "./utils/createNewTreeAndDeleteNode";

import { CurrentItem } from "./types";

function App() {
  const [data, setData] = useState(fetchedData);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<CurrentItem | null>(null);

  const callbacks = {
    addItem: useCallback(
      (name: string, currentItem: CurrentItem) => {
        const typeOfNode = currentItem.parentIDs.length > 0 ? "file" : "folder";

        setData(
          createNewTreeAndAddNode(
            data,
            name,
            typeOfNode,
            currentItem.id,
            currentItem.parentIDs
          )
        );

        setAddModalIsOpen(false);
      },
      [data]
    ),
    deleteItem: useCallback(
      (currentItem: CurrentItem) => {
        setData(
          createNewTreeAndDeleteNode(
            data,
            currentItem.id,
            currentItem.parentIDs
          )
        );
        setDeleteModalIsOpen(false);
      },
      [data]
    ),
    openAddModal: useCallback((id: number, parentIDs: number[]) => {
      setAddModalIsOpen(true);
      setCurrentItem({ id, parentIDs });
    }, []),
    openDeleteModal: useCallback(
      (id: number, parentIDs: number[], name: string) => {
        setDeleteModalIsOpen(true);
        setCurrentItem({ id, parentIDs, name });
      },
      []
    ),
    closeAddModal: useCallback(() => {
      setAddModalIsOpen(false);
      setCurrentItem(null);
    }, []),
    closeDeleteModal: useCallback(() => {
      setDeleteModalIsOpen(false);
      setCurrentItem(null);
    }, []),
  };

  return (
    <Sidebar anchor="left" open={true} hideBackdrop={true}>
      {data && (
        <FSList
          items={data}
          openAddModal={callbacks.openAddModal}
          openDeleteModal={callbacks.openDeleteModal}
        />
      )}

      <FSModal open={addModalIsOpen} closeModal={callbacks.closeAddModal}>
        {currentItem && (
          <AddModal
            addItem={callbacks.addItem}
            currentItem={currentItem}
            cancel={callbacks.closeAddModal}
          />
        )}
      </FSModal>

      <FSModal open={deleteModalIsOpen} closeModal={callbacks.closeDeleteModal}>
        {currentItem && (
          <DeleteModal
            currentItem={currentItem}
            deleteItem={callbacks.deleteItem}
            cancel={callbacks.closeDeleteModal}
          />
        )}
      </FSModal>
    </Sidebar>
  );
}

export default App;
