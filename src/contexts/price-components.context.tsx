import { TPriceComponent } from '@/types/price-component';
import { createContext } from 'react';
// Create a new context
export const PriceComponentContext = createContext({} as {
    data: TPriceComponent,
    setData: Function,
    savePriceComponent: Function
});