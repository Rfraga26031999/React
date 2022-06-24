import styled from 'styled-components';
import ItemList from './ItemList';

function ItemListContainer() {
  return(
    <Container>
      <ItemList />
    </Container>
  );
};

export default ItemListContainer;

const Container = styled.div`
  display: grid;
  flex-direction: row;
  height: 85vh;
  background-color: #111;
  flex-direction: row;
  justify-content: space-around;
  padding-top 20px;
`

// Item.js es el card del profe, cada producto en particular
// ItemList.js debe ser el body, con el fetch, el map y su settimeout, debe ir dentro del ItemListContainer.js