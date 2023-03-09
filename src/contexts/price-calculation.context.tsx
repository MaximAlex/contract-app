import { createContext } from 'react';
// Create a new context
export const PriceCalculationContext = createContext({} as {
    onCalculationSave: Function
});