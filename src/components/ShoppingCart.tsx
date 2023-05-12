import React, { useMemo, useState } from "react";
import ItemsDisplay from "./ItemsDIsplay/ItemsDisplay";
import "./shoppingCart.css";
import Resume from "./Resume/Resume";
import { ItemsContext } from "./ItemsDIsplay/ItemsContext";
import { ItemProps } from "./ItemsDIsplay/Item";
import { FreteContext } from "./Resume/FreteContext";

export default function ShoppingCart() {
  let compras = [
    {
      name: "Coca ks",
      value: 3.5,
      quant: 1,
      imgsrc:
        "https://d2r9epyceweg5n.cloudfront.net/stores/002/178/196/products/imagem_2022-10-25_0910484871-b9acf90de89d7fca1d16667005632851-640-0.png",
    },
    {
      name: "Pastel",
      value: 4.75,
      quant: 2,
      imgsrc:
        "https://www.estadao.com.br/resizer/kH3LkAMxrlY_rvX62C8fQ6zXaJQ=/1200x900/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/estadao/OYMESDUUBVJJDBXTFC4YD253O4.jpg",
    },
    {
      name: "Fatia de Bolo",
      value: 6,
      quant: 3,
      imgsrc:
        "https://www.montarumnegocio.com/wp-content/uploads/2022/06/fatias-gourmet.jpg",
    },
  ];
  const [items, setItems] = useState(compras);
  const itemsProviderValue = useMemo(
    () => ({ items, setItems }),
    [items, setItems]
  );
  const [frete, setFrete] = useState(20);
  const freteProviderValue = useMemo(
    () => ({ frete, setFrete }),
    [frete, setFrete]
  );

  return (
    <>
      <div className="shopping-cart">
        <ItemsContext.Provider value={itemsProviderValue}>
          <table>
            <tr>
              <th>
                <h1 className="text-center">Carrinho de compras</h1>

                <ItemsDisplay items={items} />
              </th>
              <th>
                <FreteContext.Provider value={{ frete, setFrete }}>
                  <Resume items={items} />
                </FreteContext.Provider>
              </th>
            </tr>
          </table>
        </ItemsContext.Provider>
      </div>
    </>
  );
}
