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
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('submit disabled when quiz isnt finished', () => {
        render(<BasicPage {...mockProps} />);
        const submitButton = screen.getByText('Submit');
        expect(submitButton).toBeDisabled();
    });

    test('next button is enabled on page one', () =>{
        render(<BasicPage {...mockProps}/>);
        const nextButton = screen.getByRole('button',{name:/Next/i});
        expect(nextButton).toBeEnabled();
    });

    test('next button is disabled on page two', ()=>{
        render(<BasicPage{...mockProps}/>);
        const nextButton = screen.getByRole('button',{name:/Next/i});
        fireEvent.click(nextButton);
        expect(nextButton).toBeDisabled();
    });

    test('back button is disabled on page one', () => {
        render(<BasicPage {...mockProps} />);
        const backButton = screen.getByRole('button',{name:/Back/i});
        expect(backButton).toBeDisabled();
    });

    test('back button is enabled on page two', ()=>{
        render(<BasicPage{...mockProps}/>);
        const backButton = screen.getByRole('button',{name:/Back/i});
        const nextButton = screen.getByRole('button',{name:/Next/i});
        fireEvent.click(nextButton);
        expect(backButton).toBeEnabled();
    });


});