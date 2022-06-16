import styled from 'styled-components';

function ItemListContainer() {
  return(
    <Container>
      <ul>
        <Producto>
          <a href='#h'>Producto 1</a>
        </Producto>
        <Producto>
          <a href='#h'>Producto 2</a>
        </Producto>
        <Producto>
          <a href='#h'>Producto 3</a>
        </Producto>
        <Producto>
          <a href='#h'>Producto 4</a>
        </Producto>
        <Producto>
          <a href='#h'>Producto 5</a>
        </Producto>
        <Producto>
          <a href='#h'>Producto 6</a>
        </Producto>
      </ul>
    </Container>
  );
}

export default ItemListContainer;

const Producto = styled.li`
  list-style: none;
  display: inline-block;
  padding: 50px;
  height: 100px;
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