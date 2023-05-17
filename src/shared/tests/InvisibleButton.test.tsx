import { render } from '@testing-library/react';
import { InvisibleButton } from '../InvisibleButton';

describe('Shared Components - Invisible Button', () => {
  it('Check styles', () => {
    const { container } = render(<InvisibleButton />);
    const mainElement = container.querySelector('button');
    expect(mainElement).toHaveStyle(`
            appearance: none;
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            font: inherit;
            cursor: pointer;
        `);
  });
});
