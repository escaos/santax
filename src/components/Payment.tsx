import styled from 'styled-components';
import { useClickOutside } from '../hooks/useClickOutside';
import { formatAmount } from '../shared/utils/amountUtils';
import { useAppContext } from '../state/AppContext';
import { ButtonAddCart, Price } from './Product.styles';
import { useRemoveAllOrderLinesMutation } from '../graphql/apiVenture';

const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  min-width: 10rem;
  padding: 1rem;

  @media (min-width: 768px) {
    min-width: 18rem;
  }
`;

type PaymentProps = {
  onClose: () => void;
};

export const Payment = ({ onClose }: PaymentProps) => {
  const { total, storeOrder } = useAppContext();
  const containerRef = useClickOutside<HTMLDivElement>(onClose);
  const [onClearCart, { loading }] = useRemoveAllOrderLinesMutation();

  const handlePay = () => {
    storeOrder();
    onClearCart();
    onClose();
  };

  return (
    <Container ref={containerRef}>
      <Price>{formatAmount(total, 'USD', 2)}</Price>
      <ButtonAddCart onClick={handlePay} disabled={loading}>
        Pay
      </ButtonAddCart>
    </Container>
  );
};
