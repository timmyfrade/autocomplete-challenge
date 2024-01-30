import { render, screen, waitFor } from '@testing-library/react';
import AutocompleteInput from './AutocompleteInput';

test('should render <AutocompleteInput> component', () => {
    render(<AutocompleteInput />);
    const input = screen.getAllByTestId('input-test');
    waitFor(() =>expect(input).toBeInTheDocument());  
});
