import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {DetailedPage} from '../pages/DetailedPage';

describe('DetailedPage', () => {
    const mockProps = {
        changePage: jest.fn(),
        changeKey: jest.fn(),
        handleSubmit: jest.fn(),
        keyValue: '',
        error: false,
        setError: jest.fn(),
        setQuizResponses: jest.fn()
    };

    test('renders header', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByText('Detailed Career Assessment')).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('renders submit button', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('submit disabled when quiz isnt finished', () => {
        render(<DetailedPage {...mockProps} />);
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeDisabled();
    });
});