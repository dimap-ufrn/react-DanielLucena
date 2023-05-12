import React, { useState, useContext } from "react";

import { ItemsContext } from "./ItemsContext";

import QuantSelector from "./QuantSelector/QuantSelector";
import "./item.css";
export type ItemProps = {
  name: string;
  value: number;
  quant: number;
  imgsrc: string;
};

export default function Item(props: ItemProps) {
  // let item: ItemProps = props;
  const { items, setItems } = useContext(ItemsContext);
  function deleteItem() {
    let newList: ItemProps[];
    newList = items.filter((item) => item.name !== props.name);
    setItems(newList);
  }
  return (
    <div className="itemBox">
      <table>
        <tr>
          <th>
            <div className="picture">
              <img src={props.imgsrc} alt="img" />
            </div>
          </th>
          <th>
            <tr>
              <th>
                <p>produto: {props.name}</p>
                <span>R$ {props.value}</span>
                {/* {endereco && <p>{endereco?.localidade + " " + endereco?.uf}</p>} */}
              </th>
              <th>
                <QuantSelector {...props} />
              </th>
              <th>
                <p>valor: R$ {props.value * props.quant}</p>
              </th>
              <th>
                <button onClick={() => deleteItem()}> &#128465; </button>
              </th>
            </tr>
          </th>
        </tr>
      </table>
    </div>
  );
}
