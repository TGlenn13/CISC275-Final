import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {DetailedPage} from '../pages/DetailedPage';
import userEvent from '@testing-library/user-event';



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

    async function finishQuiz() {
        const textareasPage1 = document.querySelectorAll('textarea');

        await userEvent.type(textareasPage1[0], 'coding');
        await userEvent.type(textareasPage1[1], 'css');
        await userEvent.type(textareasPage1[2], 'home');
        await userEvent.type(textareasPage1[3], 'testing');

        await userEvent.click(screen.getByRole('button', { name: /next/i }));

        const textareasPage2 = document.querySelectorAll('textarea');

        await userEvent.type(textareasPage2[0], 'quick');
        await userEvent.type(textareasPage2[1], 'worker bee');
        await userEvent.type(textareasPage2[2], 'testing');
        await userEvent.type(textareasPage2[3], 'fun');
    }


    test('renders header', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByText('Detailed Career Assessment')).toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('renders submit button', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByRole('button',{name:/Submit/i})).toBeInTheDocument();
    });

    test('submit disabled when quiz isnt finished', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByRole('button',{name:/Submit/i})).toBeDisabled();
    });

    test('submit enabled when quiz is finished', async () => {
        render(<DetailedPage {...mockProps} />);
        await finishQuiz();
        expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
    });

    test('next button is enabled on page one', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByRole('button', { name: /Next/i })).toBeEnabled();
    });

    test('next button is disabled on page two', () => {
        render(<DetailedPage {...mockProps} />);
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled();
    });

    test('back button is disabled on page one', () => {
        render(<DetailedPage {...mockProps} />);
        expect(screen.getByRole('button', { name: /Back/i })).toBeDisabled();
    });

    test('back button is enabled on page two', () => {
        render(<DetailedPage {...mockProps} />);
        fireEvent.click(screen.getByRole('button', { name: /Next/i }));
        expect(screen.getByRole('button', { name: /Back/i })).toBeEnabled();
    });

    test('submission popup appears when quiz is submitted', async () => {
        render(<DetailedPage {...mockProps} />);
        await finishQuiz();
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.getByText(/submission successful/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /show results/i })).toBeInTheDocument();
    });
});

