import React from 'react';
import styled from 'styled-components';

function Item() {
  return (
    <div>
      <VerDetalle><a href='#h'>Ver detalle del producto</a></VerDetalle>
    </div>
  );
};

export default Item;

const VerDetalle = styled.button`
  margin-top: 15px;
  a {
    color: black;
  }
`