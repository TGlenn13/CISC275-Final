import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BasicPage} from '../pages/BasicPage';
import { Button } from 'react-bootstrap';

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

    test('renders submit button', () => {
        render(<BasicPage {...mockProps} />);
        expect(screen.getByRole('button',{name:/Submit/i})).toBeInTheDocument();
    });

    test('submit disabled when quiz isnt finished', () => {
        render(<BasicPage {...mockProps} />);
        expect(screen.getByRole('button',{name:/Submit/i})).toBeDisabled();
    });

    test('next button is enabled on page one', () => {
        render(<BasicPage {...mockProps} />);
        expect(screen.getByRole('button', { name: /Next/i })).toBeEnabled();
    });

    test('next button is disabled on page two', () => {
        render(<BasicPage {...mockProps} />);
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled();
    });

    test('back button is disabled on page one', () => {
        render(<BasicPage {...mockProps} />);
        expect(screen.getByRole('button', { name: /Back/i })).toBeDisabled();
    });

    test('back button is enabled on page two', () => {
        render(<BasicPage {...mockProps} />);
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        expect(screen.getByRole('button', { name: /Back/i })).toBeEnabled();
    });



});