import { createContext, Dispatch } from "react";
import Item, { ItemProps } from "./Item";
//export const ItemsListContext = createContext(0);

type ItemsContextType = {
  items: ItemProps[];
  setItems: Dispatch<ItemProps[]>;
};

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  setItems: (v) => {},
});
