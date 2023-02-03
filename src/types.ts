export type CurrentItem = {
  id: number;
  parentIDs: number[];
  name?: string;
};

export type Item = {
  id: number;
  name: string;
  type: "folder" | "file";
  children?: Item[];
};

export type newNode = {
  id: number;
  name: string;
  type: "folder" | "file";
  children?: [];
};
