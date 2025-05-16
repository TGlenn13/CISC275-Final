import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BasicPage} from '../pages/BasicPage';
import userEvent from '@testing-library/user-event';



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

async function finishQuiz() {
    render(<BasicPage {...mockProps} />);
    await userEvent.click(screen.getByRole('radio', { name: /leading a team or organizing an event/i }));
    await userEvent.click(screen.getByRole('radio', { name: /based on logic, facts, and data/i }));
    await userEvent.click(screen.getByRole('radio', { name: /supportive and empathetic/i }));
    await userEvent.click(screen.getByRole('radio', { name: /designing, writing, or performing/i }));

    await userEvent.click(screen.getByRole('button', { name: /next/i }));

    await userEvent.click(screen.getByRole('radio', { name: /math or science/i }));
    await userEvent.click(screen.getByRole('radio', { name: /imaginative and expressive/i }));
    await userEvent.click(screen.getByRole('radio', { name: /making a positive difference in people’s lives/i }));
    await userEvent.click(screen.getByRole('radio', { name: /financial success and leadership opportunities/i }));
}


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

    test('submit enabled when quiz is finished', async () => {
        await finishQuiz();
        expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
    });

    test('next button is enabled on page one', () => {
        render(<BasicPage {...mockProps} />);
        const nextButtons = screen.getAllByRole('button', { name: /Next/i });
        const enabledNextButton = nextButtons.find(btn => !btn.disabled);
        expect(enabledNextButton).toBeEnabled();
    });

    test('next button is disabled on page two', () => {
        render(<BasicPage {...mockProps} />);
        fireEvent.click(screen.getAllByRole('button', { name: /Next/i }).find(btn => !btn.disabled));
        const nextButtons = screen.getAllByRole('button', { name: /Next/i });
        const disabledNextButton = nextButtons.find(btn => btn.disabled);
        expect(disabledNextButton).toBeDisabled();
    });

    test('back button is disabled on page one', () => {
        render(<BasicPage {...mockProps} />);
        const backButtons = screen.getAllByRole('button', { name: /Back/i });
        const disabledBackButton = backButtons.find(btn => btn.disabled);
        expect(disabledBackButton).toBeDisabled();
    });

    test('back button is enabled on page two', () => {
        render(<BasicPage {...mockProps} />);
        fireEvent.click(screen.getAllByRole('button', { name: /Next/i }).find(btn => !btn.disabled));
        const backButtons = screen.getAllByRole('button', { name: /Back/i });
        const enabledBackButton = backButtons.find(btn => !btn.disabled);
        expect(enabledBackButton).toBeEnabled();
    });

    test('renders questions 1–4 on page one', () => {
        //Determines if questions are visible based off if the options render

        render(<BasicPage {...mockProps} />);
        
        // Q1
        expect(screen.getByRole('radio', {
            name: /leading a team or organizing an event/i
        })).toBeInTheDocument();
        
        // Q2
        expect(screen.getByRole('radio', {
            name: /based on logic, facts, and data/i
        })).toBeInTheDocument();
        
        // Q3
        expect(screen.getByRole('radio', {
            name: /supportive and empathetic/i
        })).toBeInTheDocument();
        
        // Q4
        expect(screen.getByRole('radio', {
            name: /designing, writing, or performing/i
        })).toBeInTheDocument();
    });

    test('renders questions 5–8 on page two', () => {
        //Determines if questions are visible based off if the options render
        render(<BasicPage {...mockProps} />);

        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        // Q5
        expect(screen.getByRole('radio', {
            name: /math or science/i
        })).toBeInTheDocument();

        // Q6
        expect(screen.getByRole('radio', {
            name: /imaginative and expressive/i
        })).toBeInTheDocument();

        // Q7
        expect(screen.getByRole('radio', {
            name: /making a positive difference in people’s lives/i
        })).toBeInTheDocument();

        // Q8
        expect(screen.getByRole('radio', {
            name: /financial success and leadership opportunities/i
        })).toBeInTheDocument();
    });

});

