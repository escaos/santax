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
  margin: 3rem 0;
  justify-items: center;
  align-items: center;
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
