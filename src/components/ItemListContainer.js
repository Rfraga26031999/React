import styled from 'styled-components';
import ItemCount from './ItemCount';

function ItemListContainer() {
  return(
    <Container>
      <ul>
        <Producto>
          <a href='#h'>Producto 1</a>
          <ItemCount stock={0} initial={0}/>
        </Producto>
        <Producto>
          <a href='#h'>Producto 2</a>
          <ItemCount stock={9} initial={0}/>
        </Producto>
        <Producto>
          <a href='#h'>Producto 3</a>
          <ItemCount stock={12} initial={0}/>
        </Producto>
        <Producto>
          <a href='#h'>Producto 4</a>
          <ItemCount stock={15} initial={0}/>
        </Producto>
        <Producto>
          <a href='#h'>Producto 5</a>
          <ItemCount stock={7} initial={0}/>
        </Producto>
        <Producto>
          <a href='#h'>Producto 6</a>
          <ItemCount stock={5} initial={0}/>
        </Producto>
      </ul>
    </Container>
  );
}

export default ItemListContainer;

const Producto = styled.li`
  list-style: none;
  display: inline-block;
  padding: 10px 10px 50px 10px;
  height: 150px;
  width: 200px;
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
`

const Container = styled.div`
  display: grid;
  flex-direction: row;
  height: 85vh;
  background-color: #111;
  flex-direction: row;
  justify-content: space-around;
  padding-top 20px;

  ul {
    width: 90vw;
  }
`