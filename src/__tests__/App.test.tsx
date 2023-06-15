// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// To Test
import App from '../App';
import { calculateCosts } from '../utils/calculator';

// Tests
describe('Renders main page correctly', async () => {

    it('Should render the page correctly', async () => {
        // Setup
        await render(<App />);
        const button = await screen.queryByText('Calculate cost');

        // Post Expectations
        expect(button).toBeInTheDocument();
    });

    const mockData = [
        { 
            input: {
                consumption: 100, 
                startDate: new Date("Fri Jun 16 2023 20:00:00 GMT+0200"), 
                duration: 30
            }, 
            output: 10
        },
        { 
            input: {
                consumption: 100, 
                startDate: new Date("Sun Jun 18 2023 22:00:00 GMT+0200"), 
                duration: 30
            }, 
            output: 9 
        },
        { 
            input: {
                consumption: 200, 
                startDate: new Date("Thu Jun 22 2023 16:00:00 GMT+0200"), 
                duration: 600
            }, 
            output: 388 
        },
    ];

    // Global calculations test
    it('Should give correct output', async () => {

        mockData.forEach((data) => {
            const { consumption, startDate, duration } = data.input;
            const result = calculateCosts(consumption, startDate, duration);

            expect(result).toBe(data.output);
        });

    });

});