import { useState } from "react";
import styled from "styled-components";

function ItemCount({ stock }) {
  const [num, setNum] = useState(0);

  const suma = () => {
    if(stock > 0) {
      setNum(num + 1);
    };
  };

  const resta = () => {
    if(num > 0) {
      setNum(num - 1);
    };
  };

  const reinicia = () => {
    setNum(0);
  };

  return (
    <>
      <Contenedor>{num}</Contenedor>
      <Boton onClick={suma} disabled={num >= stock}>+</Boton>
      <Boton onClick={resta} disabled={num === 0}>-</Boton>
      <Agregar onClick={reinicia} disabled={num === 0}>Agregar al carrito</Agregar>
    </>
  );
};

export default ItemCount;

const Boton = styled.button`
  height: 25px;
  width: 60px;
  margin-right: 6px;
`

const Contenedor = styled.p`
  color: white;
  font-size: 30px;
`

const Agregar = styled.button`
  width: 80%;
  height: 30px;
  margin-top: 15px;
`