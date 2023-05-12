import React from "react";

export type SumProps = {
  itemsPrice: number;
  itemsQuant: number;
  fretePrice: number;
};

export default function Sum(props: SumProps) {
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-sm-6">
            <p>Itens ( {props.itemsQuant} )</p>
          </div>
          <div className="col-sm-6">
            <p>R$ {props.itemsPrice}</p>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col-sm-6">
            <p>Frete</p>
          </div>
          <div className="col-sm-6">
            <p>R$ {props.fretePrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}
