import { render } from '@testing-library/react';
import { LoadingScreen } from '../Loading';

describe('Shared Components - Loading', () => {
  it('renders loading screen without a message', () => {
    const { container } = render(<LoadingScreen />);
    const mainElement = container.querySelector('main');
    const loadingElement = container.querySelector('div');
    expect(mainElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    expect(container.querySelector('p')).not.toBeInTheDocument();
  });

  it('renders loading screen with a message', () => {
    const { getByText, container } = render(<LoadingScreen message="Loading..." />);
    const mainElement = container.querySelector('main');
    const loadingElement = container.querySelector('div');
    const message = getByText(/loading/i);
    expect(mainElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('renders loading screen with a long message', () => {
    const longMessage = 'This is a very long message that should still be displayed properly on the loading screen.';
    const { getByText, container } = render(<LoadingScreen message={longMessage} />);
    const mainElement = container.querySelector('main');
    const loadingElement = container.querySelector('div');
    const message = getByText(longMessage);
    expect(mainElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('renders loading screen with a special character message', () => {
    const specialMessage = 'This message contains special characters: !@#$%^&*()_+';
    const { getByText, container } = render(<LoadingScreen message={specialMessage} />);
    const mainElement = container.querySelector('main');
    const loadingElement = container.querySelector('div');
    const message = getByText(specialMessage);
    expect(mainElement).toBeInTheDocument();
    expect(loadingElement).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('checking styles', () => {
    const { container } = render(<LoadingScreen />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toHaveStyle(`
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.9);
            z-index: 20;
        `);
  });
});
