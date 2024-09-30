import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Button in the document', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Button in the document', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
