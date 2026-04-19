/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import Buttons from './App';

describe('Buttons Component Unit Tests', () => {
    afterEach(() => {
        cleanup();
    });

    // 1. Концепція Assertions (Перевірки) 
    it('відображає початковий заголовок та порожнє повідомлення', () => {
        render(<Buttons />);
        expect(screen.getByText(/Second test/i)).toBeDefined();
        const message = screen.getByRole('paragraph');
        expect(message.textContent).toBe("");
    });

    // 2. Практика з Mock-об’єктами (Mock Functions) 
    it('демонструє використання Mock-функції для тестування логіки', () => {
        const mockFn = vi.fn();

        mockFn('test data');

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledWith('test data');
    });

    // Тести функціоналу (Unit Tests)
    it('змінює повідомлення при натисканні на Кнопку 1', () => {
        render(<Buttons />);
        fireEvent.click(screen.getByText('Кнопка 1'));
        expect(screen.getByText('Натиснута перша кнопка')).toBeDefined();
    });

    it('змінює повідомлення при натисканні на Кнопку 2', () => {
        render(<Buttons />);
        fireEvent.click(screen.getByText('Кнопка 2'));
        expect(screen.getByText('Натиснута друга кнопка')).toBeDefined();
    });

    it('змінює повідомлення при натисканні на Кнопку 3', () => {
        render(<Buttons />);
        fireEvent.click(screen.getByText('Кнопка 3'));
        expect(screen.getByText('Натиснута третя кнопка')).toBeDefined();
    });

    it('змінює повідомлення при натисканні на Кнопку 4', () => {
        render(<Buttons />);
        fireEvent.click(screen.getByText('Кнопка 4'));
        expect(screen.getByText('Натиснута четверта кнопка')).toBeDefined();
    });
/*
    // "Зламаний" тест 
    it('навмисно зламаний тест для звіту', () => {
        render(<Buttons />);
        fireEvent.click(screen.getByText('Кнопка 1'));
        expect(screen.getByText('Цей текст ніколи не з’явиться')).toBeDefined(); 
    });*/
});