import styled, { keyframes } from 'styled-components';

const chargingAnimation = keyframes`
  0% {
    background-size: 0 100%;
  }
  100% {
    background-size: 95% 100%;
  }
`;

export const Loading = styled.div`
  width: 80vw;
  max-width: 20rem;
  height: 1rem;
  background: linear-gradient(to right, lightblue, deepskyblue);
  background-repeat: no-repeat;
  background-size: 0 100%;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: ${chargingAnimation} 3s ease-out infinite;

  @media (min-width: 768px) {
    width: 20rem;
  }

  &::before {
    content: '';
    display: block;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
`;

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 20;
`;

type LoadingScreenProps = {
  message?: string;
};

export const LoadingScreen = ({ message }: LoadingScreenProps) => {
  return (
    <Container>
      <Loading />
      {message && <p>{message}</p>}
    </Container>
  );
};
