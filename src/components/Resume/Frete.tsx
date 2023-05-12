import React, { useState, useContext, ReactDOM } from "react";
import { FreteContext } from "./FreteContext";

export type EnderecoProps = {
  localidade: string;
  uf: string;
};

export default function Frete() {
  const [cep, setCep] = useState("59020240");
  const [endereco, setEndereco] = useState<EnderecoProps | null>(null);
  const { frete, setFrete } = useContext(FreteContext);
  const [validationMsg, setValidationMsg] = useState("");

  //setEndereco({ localidade: "", uf: "" });
  //setFrete(78);

  const descobrirEndereco = async () => {
    console.log(cep);
    let location: string = "";
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    const { localidade, uf } = data;
    const enderecoData: EnderecoProps = {
      localidade,
      uf,
    };
    setEndereco(enderecoData);
    console.log(endereco);
    // let value = 20;
    // if (endereco?.uf == "RN") {
    //   value;
    // }
  };
  const calculateFrete = async () => {
    const pattern = /^[0-9]*$/;
    if (pattern.test(cep)) {
      setValidationMsg("");
    } else {
      setValidationMsg("O Cep deve conter apenas Numeros");
      return;
    }

    //setFrete(100);
    try {
      descobrirEndereco().then(() => {
        const grandeNatal: string[] = ["Natal", "Parnamirim"];
        let value = 20;
        const a: boolean[] = [
          endereco?.uf === "RN",
          grandeNatal.indexOf(endereco!.localidade) > -1,
          endereco?.localidade === "Natal",
        ];
        console.log("a: " + a);
        a.forEach((element) => {
          if (element) value -= 5;
        });
        console.log("value: " + value);
        setFrete(value);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <p>Frete</p>
        <tr>
          <th>CEP</th>
          <th>
            <input
              type="text"
              className="form-control"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            ></input>
            <a>{validationMsg}</a>
          </th>
          <th>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => calculateFrete()}
            >
              &#128270;
            </button>
          </th>
          <th>
            <span>R$ {frete}</span>
          </th>
        </tr>

        {endereco && <p>{endereco?.localidade + " " + endereco?.uf}</p>}
      </div>
    </>
  );
}
