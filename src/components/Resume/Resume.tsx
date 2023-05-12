import React, { useContext, useState } from "react";

import Frete from "./Frete";
import Sum from "./Sum";
import { ItemsContext } from "../ItemsDIsplay/ItemsContext";
import { ItemsProps } from "../ItemsDIsplay/ItemsDisplay";
import { FreteContext } from "./FreteContext";
import "./resume.css";

export default function Resume(items: ItemsProps) {
  const { frete, setFrete } = useContext(FreteContext);
  const [location, setLocation] = useState("");
  //let frete = 10;
  const ctx = useContext(ItemsContext);
  function calculatePrice(): number {
    let price: number = 0;
    ctx.items.forEach((element) => {
      price += element.value * element.quant;
    });
    return price;
  }
  function calculateQuant(): number {
    let quant: number = 0;
    ctx.items.forEach((element) => {
      quant += element.quant;
    });
    return quant;
  }
  function calculateTotal(): number {
    return calculatePrice() + frete;
  }
  return (
    <>
      <div className="resume">
        <h3>resumo</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Frete />
          </li>
          <li className="list-group-item">
            <Sum
              itemsPrice={calculatePrice()}
              itemsQuant={calculateQuant()}
              fretePrice={frete}
            />
          </li>
          <li className="list-group-item">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-sm-6">
                  <p>Total</p>
                </div>
                <div className="col-sm-6">
                  <p>R$ {calculateTotal()}</p>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <button type="button" className="fechar-pedido">
              FECHAR PEDIDO
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
