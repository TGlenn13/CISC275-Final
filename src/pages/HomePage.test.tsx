import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "./HomePage";

jest.mock("openai", () => ({
    OpenAI: jest.fn().mockImplementation(() => ({
        models: {
            list: jest.fn().mockResolvedValue([])
        }
    }))
}));

describe("HomePage", () => {
    const mockProps = {
        changePage: jest.fn(),
        changeKey: jest.fn(),
        handleSubmit: jest.fn(),
        keyValue: "",
        error: false,
        setError: jest.fn()
    };

    beforeEach(() => {
        Storage.prototype.getItem = jest.fn(() => JSON.stringify(""));
        Storage.prototype.setItem = jest.fn();
    });

    test("renders title", () => {
        render(<HomePage {...mockProps} />);
        expect(screen.getByText("Career Helpi")).toBeInTheDocument();
    });

    test("renders assessment buttons", () => {
        render(<HomePage {...mockProps} />);
        const buttons = screen.getAllByText("Start Assessment");
        expect(buttons).toHaveLength(2);
    });

    test("renders API key input", () => {
        render(<HomePage {...mockProps} />);
        expect(screen.getByPlaceholderText("Insert API Key Here")).toBeInTheDocument();
    });
});