import React, { useContext, useState } from "react";
import { ItemsContext } from "../ItemsContext";
import { ItemProps } from "../Item";
import up from "../../../assets/up.png";
import down from "../../../assets/down.png";
import "./quantSelector.css";

export type QuantSelectorProps = {
  name: string;
};

export default function QuantSelector(props: ItemProps) {
  const { items, setItems } = useContext(ItemsContext);
  // const [quant, setQuant] = useState((): number => {
  //   const val = items.find((item) => item.name === props.name)?.quant;
  //   return typeof val === "number" ? val : 0;
  // });

  function changeQuantBy1(value: number) {
    setItems(
      items.map((item) => {
        if (item.name === props.name) {
          if (value > 0) {
            return { ...item, quant: item.quant + value };
          } else if (item.quant >= 1) {
            return { ...item, quant: item.quant + value };
          }
          return item;
        } else {
          return item;
        }
      })
    );
    console.log(items);
  }

  return (
    <div className="quant-selector">
      <table>
        <tr>
          <th>
            <span>{props.quant}</span>
          </th>
          <th>
            <tr>
              <button
                id="up"
                name="up"
                className="arrow"
                onClick={() => changeQuantBy1(1)}
              >
                <img src={up} />
              </button>
            </tr>
            <tr>
              <button
                id="down"
                className="arrow"
                onClick={() => changeQuantBy1(-1)}
              >
                <img src={down} />
              </button>
            </tr>
          </th>
        </tr>
      </table>
    </div>
  );
}
