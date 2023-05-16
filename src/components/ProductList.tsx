import { memo } from 'react';
import styled from 'styled-components';

import { ProductFieldsFragment } from '../graphql/apiVenture';
import { Product } from './Product';

type ProductListProps = {
  products: ProductFieldsFragment[];
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
  margin: 7rem 0 3rem;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
    justify-content: space-evenly;
    margin: 10rem 5rem 3rem;

    > * {
      max-width: 22rem;
      height: 22rem;
    }
  }
`;

const ProductListContainer = ({ products }: ProductListProps) => {
  return (
    <Container>
      {products.map((item) => {
        return <Product key={item.name} {...item} />;
      })}
    </Container>
  );
};

export const ProductList = memo(ProductListContainer);
