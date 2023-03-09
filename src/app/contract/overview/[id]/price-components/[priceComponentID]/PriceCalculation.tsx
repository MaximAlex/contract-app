import { PriceCalculationContext } from '@/contexts/price-calculation.context';
import { TCalculation } from '@/types/price-component';
import { setPropInObject } from '@/utils/object';
import PriceCalculationItem from './PriceCalculationItem';
interface ComponentProps {
    calculation: TCalculation,
    updateCalculation: Function
}
const PriceCalculation = ({ calculation, updateCalculation }: ComponentProps) => {
    function onCalculationSave(calculationItem: TCalculation, prefix: string) {
        // remove the "#" character
        prefix = prefix.substring(1);
        let indexes: Array<any> = prefix ? prefix.split(".") : [];
        if (indexes.length === 1) {
            calculation = calculationItem;
        } else {
            indexes.shift();
            indexes = indexes.map(index => "multipliers." + (parseInt(index) - 1));
            console.log(indexes.join('.'));
            setPropInObject(calculation, indexes.join('.'), calculationItem);
        }
        updateCalculation({ ...calculation })
    }
    return (
        <PriceCalculationContext.Provider value={{ onCalculationSave }}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Calculation</th>
                        <th scope="col">Measure type</th>
                        <th scope="col">Measure</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Composition</th>
                        <th scope="col">Rounding</th>
                        <th scope="col">Scale</th>
                        <th scope="col">Factor</th>
                        <th scope="col">Ponderation power</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <PriceCalculationItem calculation={calculation} prefix={"#1"} isParent={true}></PriceCalculationItem>
                </tbody>
            </table>
        </PriceCalculationContext.Provider>
    );
};

export default PriceCalculation;