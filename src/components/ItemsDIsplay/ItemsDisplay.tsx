import React, { ReactNode, useState, useContext } from "react";
import Item, { ItemProps } from "./Item";
import "./itemsDisplay.css";

import { ItemsContext } from "./ItemsContext";
export type ItemsProps = {
  items: ItemProps[];
};

export default function ItemsDisplay(props: ItemsProps) {
  const ctx = useContext(ItemsContext);
  return (
    <>
      {ctx.items.length === 0 && <p>Nenhum item encontrado</p>}
      <ul className="list-group">
        {ctx.items.map((item) => (
          <li className="list-group-item" key={item.name}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}
