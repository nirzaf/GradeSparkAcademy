import { render, screen } from '@testing-library/react';
import { Hero } from './index'; // Assuming Hero is exported from index.tsx

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    // Look for a heading that contains the distinctive phrase from the H1
    const headingElement = screen.getByRole('heading', { 
      name: /Excel in Your Academic Journey/i 
    });
    expect(headingElement).toBeInTheDocument();
  });
});
