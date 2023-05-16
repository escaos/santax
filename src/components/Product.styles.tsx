import styled from 'styled-components';
import { InvisibleButton } from '../shared/InvisibleButton';

interface ButtonProps {
  processing?: boolean;
}

export const Container = styled.article<{ bgImage: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 90vw;
  height: 90vw;
  background: rgba(255, 255, 255, 0.25) url(${(props) => props.bgImage}) center/cover no-repeat;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  margin: 0;
  border-radius: 0.25rem 0.25rem 0 0;
`;

export const Title = styled.h3`
  color: #000;
  margin: 0.5rem 1rem;
`;

export const ButtonArrow = styled(InvisibleButton)<{ left?: boolean; right?: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 0.8rem 0.9rem 0.8rem 0.8rem;
  border-radius: 50%;
  top: 45%;
  ${(props) => (props.left ? 'left: 10px' : '')};
  ${(props) => (props.right ? 'right: 10px' : '')};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 0.8rem;
  padding-right: 0.9rem;
`;

export const PriceButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Price = styled.div`
  margin-left: 0.25rem;
  margin-bottom: 0.25rem;
  padding: 0.55rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #004d40;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.25rem);
  -webkit-backdrop-filter: blur(0.25rem);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
`;

export const ButtonAddCart = styled(InvisibleButton)<ButtonProps>`
  background-image: ${(props) =>
    props.processing ? 'linear-gradient(45deg, #34eb4f, #34eb9d)' : 'linear-gradient(45deg, #b4f8c8, #82e6d1)'};
  color: #004d40;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 50%;
  margin: 0 0.25rem 0.25rem 0;

  &:hover {
    background-image: linear-gradient(45deg, #82e6d1, #b4f8c8);
    transform: scale(1.05);
  }

  @media (hover: none) {
    &:hover {
      background-image: ${(props) =>
        props.processing ? 'linear-gradient(45deg, #34eb4f, #34eb9d)' : 'linear-gradient(45deg, #b4f8c8, #82e6d1)'};
      transform: none;
    }
  }

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
