import { Item } from "../types";

/**
 * ParentIDs хранит id всех родителей
 *
 * Функция созадёт новое дерево и удаляет элемент по id
 */
export default function createNewTreeAndDeleteNode(
  data: Item[],
  id: number,
  IDs: number[],
  iteration = 0
): Item[] {
  if (iteration === IDs.length) {
    return data.filter((item: any) => item.id !== id);
  }

  return data.map((item: any) => {
    if (item.id === IDs[iteration]) {
      return {
        ...item,
        children: createNewTreeAndDeleteNode(
          item.children,
          id,
          IDs,
          iteration + 1
        ),
      };
    }

    return item;
  });
}
