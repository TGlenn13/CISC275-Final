import {getByRole, render, screen} from '@testing-library/react';
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
});