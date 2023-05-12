import { createContext, Dispatch } from "react";

//export const ItemsListContext = createContext(0);

type FreteContextType = {
  frete: number ;
  setFrete: Dispatch<number>;
};

export const FreteContext = createContext<FreteContextType>({
  frete: 50,
  setFrete: (v) => {},
});
