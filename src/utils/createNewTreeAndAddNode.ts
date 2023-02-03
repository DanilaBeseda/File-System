import randomID from "./randomID";
import { Item, newNode } from "../types";

/**
 * IDs хранит id всех родителей
 *
 * Функция созадёт новое дерево и добавляет новый элемент в папку по её id
 */
export default function createNewTreeAndAddNode(
  data: Item[],
  name: string,
  type: "folder" | "file",
  id: number,
  IDs: number[],
  iteration = 0
): Item[] {
  return data.map((item: any) => {
    if (iteration === IDs.length) {
      if (item.id === id) {
        const newNode: newNode = { id: randomID(), name, type };

        if (newNode.type === "folder") {
          newNode.children = [];
        }

        return {
          ...item,
          children: [...item.children, newNode],
        };
      }

      return item;
    }

    if (item.id === IDs[iteration]) {
      return {
        ...item,
        children: createNewTreeAndAddNode(
          item.children,
          name,
          type,
          id,
          IDs,
          iteration + 1
        ),
      };
    }

    return item;
  });
}
