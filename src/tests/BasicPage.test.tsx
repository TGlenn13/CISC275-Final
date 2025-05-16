import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BasicPage} from '../pages/BasicPage';

describe('BasicPage', () => {
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
        render(<BasicPage {...mockProps} />);
        expect(screen.getByText('Basic Career Assessment')).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    // test('renders first question page', () => {
    //     render(<BasicPage {...mockProps} />);
    //     expect(screen.getByText('1.')).toBeInTheDocument();
    //     expect(screen.getByText('2.')).toBeInTheDocument();
    //     expect(screen.getByText('3.')).toBeInTheDocument();
    //     expect(screen.getByText('4.')).toBeInTheDocument();
    // });

    test('renders submit button', () => {
        render(<BasicPage {...mockProps} />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('submit disabled when quiz isnt finished', () => {
        render(<BasicPage {...mockProps} />);
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeDisabled();
    });
});