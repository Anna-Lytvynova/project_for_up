/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import Buttons from "./App";

describe("Buttons Component Unit Tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("відображає початковий заголовок та порожнє повідомлення", () => {
    render(<Buttons />);
    expect(screen.getByText(/Перевірка роботи кнопок/i)).toBeDefined();
    const message = screen.getByRole("paragraph");
    expect(message.textContent).toBe("");
  });

  it("демонструє використання Mock-функції для тестування логіки", () => {
    const mockFn = vi.fn();
    mockFn("test data");
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith("test data");
  });

  it("змінює повідомлення при натисканні на Кнопку 1", () => {
    render(<Buttons />);
    fireEvent.click(screen.getByText("Кнопка 1"));
    expect(screen.getByText("Натиснута перша кнопка")).toBeDefined();
  });

  it("змінює повідомлення при натисканні на Кнопку 2", () => {
    render(<Buttons />);
    fireEvent.click(screen.getByText("Кнопка 2"));
    expect(screen.getByText("Натиснута друга кнопка")).toBeDefined();
  });

  it("змінює повідомлення при натисканні на Кнопку 3", () => {
    render(<Buttons />);
    fireEvent.click(screen.getByText("Кнопка 3"));
    expect(screen.getByText("Натиснута третя кнопка")).toBeDefined();
  });

  it("змінює повідомлення при натисканні на Кнопку 4", () => {
    render(<Buttons />);
    fireEvent.click(screen.getByText("Кнопка 4"));
    expect(screen.getByText("Натиснута четверта кнопка")).toBeDefined();
  });
});
