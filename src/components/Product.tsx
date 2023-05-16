import { memo } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

import { Order, ProductFieldsFragment, useAddItemToOrderMutation } from '../graphql/apiVenture';
import { usePrevNext } from '../hooks/usePrevNext';
import { formatAmount } from '../shared/utils/amountUtils';
import { ButtonAddCart, ButtonArrow, Container, Header, Price, PriceButton, Title } from './Product.styles';
import { useAppContext } from '../state/AppContext';

type ProductProps = ProductFieldsFragment;

const ProductContainer = (props: ProductProps) => {
  const { storeOrder } = useAppContext();
  const [addItem, { loading, error }] = useAddItemToOrderMutation({
    variables: {
      productVariantId: props.variants[0].id,
      quantity: 1,
    },
  });
  const { assetIdx, onPrevious, onNext } = usePrevNext(props.assets.length);
  const price = props.variants[0];

  const handleAddCart = async () => {
    const { data: response } = await addItem({ variables: { productVariantId: price.id, quantity: 1 } });

    if (response) {
      const order = response.addItemToOrder as Order;
      storeOrder(order);
    }
  };

  return (
    <Container bgImage={props.assets[assetIdx]?.preview}>
      <Header>
        <Title>{props.name}</Title>
      </Header>
      <ButtonArrow onClick={onPrevious} left>
        <BiLeftArrow />
      </ButtonArrow>
      <ButtonArrow onClick={onNext} right>
        <BiRightArrow />
      </ButtonArrow>

      <PriceButton>
        <Price>{formatAmount(price.price, price.currencyCode, 2)}</Price>
        <ButtonAddCart onClick={handleAddCart}>{loading ? 'Adding...' : 'Add to Cart'}</ButtonAddCart>
        {error && <p>{error.message}</p>}
      </PriceButton>
    </Container>
  );
};

export const Product = memo(ProductContainer);
