import { memo } from 'react';
import styled from 'styled-components';
import { ProductFieldsFragment } from '../graphql/apiVenture';
import { usePrevNext } from '../hooks/usePrevNext';

type ProductProps = ProductFieldsFragment;

const Container = styled.article<{ bgImage: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 80vw;
  height: 80vw;
  background: rgba(255, 255, 255, 0.25) url(${(props) => props.bgImage}) center/cover no-repeat;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem;
`;

const Title = styled.h3`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
  padding: 0.5rem;
`;

const Button = styled.button<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? 'left: 10px' : '')};
  ${(props) => (props.right ? 'right: 10px' : '')};
  /* Additional styles for your buttons */
`;

const ProductContainer = (props: ProductProps) => {
  const { assetIdx, onPrevious, onNext } = usePrevNext(props.assets.length);

  return (
    <Container bgImage={props.assets[assetIdx]?.preview}>
      <Title>{props.name}</Title>
      <Button onClick={onPrevious} left>
        Prev
      </Button>
      <Button onClick={onNext} right>
        Next
      </Button>
    </Container>
  );
};

export const Product = memo(ProductContainer);
