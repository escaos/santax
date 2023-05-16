import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';

import { InvisibleButton } from '../shared/InvisibleButton';
import { formatAmount } from '../shared/utils/amountUtils';
import { useAppContext } from '../state/AppContext';
import { useToggle } from '../hooks/useToggle';
import { Payment } from './Payment';

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to right, #ff7f7f, #d94646);
  z-index: 10;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    padding: 0;
    padding: 1rem 2rem;
    height: 2rem;
  }
`;

const Img = styled.img`
  width: 50%;

  @media (min-width: 768px) {
    width: 15%;
    height: 100%;
  }
`;

const CartContainer = styled(InvisibleButton)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: white;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Total = styled.span`
  font-size: 1.5rem;
`;

const Icon = styled(RiShoppingCartLine)``;

export const Header = () => {
  const { total } = useAppContext();
  const { value: open, onToggle } = useToggle(false);

  return (
    <Container>
      <Img src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png" alt="logo" />
      <CartContainer onClick={onToggle}>
        <Total>{formatAmount(total ?? 0, 'USD', 2)}</Total>
        <Icon />
      </CartContainer>
      {open && total > 0 && <Payment onClose={onToggle} />}
    </Container>
  );
};
