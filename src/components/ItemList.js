import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

function ItemList() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    setTimeout(fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setInfo(data)), 2000)
  }, []);

  return (
    <Lista>
      {
        info.map(i => 
          <Producto>
            <a href='#h'>{i.nombre} </a>
            <span> ${i.precio}</span>
            <ItemCount stock={i.stock}/>
          </Producto>)
        };
    </Lista>
  );
};

export default ItemList;

const Lista = styled.ul`
  width: 90vw;
`

const Producto = styled.li`
  list-style: none;
  display: inline-block;
  padding: 10px 10px 50px 10px;
  height: 200px;
  width: 300px;
  border: 1px solid white;
  margin-right: 100px;
  margin-top: 50px;
  border-radius: 20px;

  a{
    color: white;
    text-decoration: none;
    margin; 1rem;
    text-align: center;
  }
  span{
    color: white;
    font-size: 22px;
  }
`