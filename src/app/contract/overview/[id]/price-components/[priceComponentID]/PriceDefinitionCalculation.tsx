import { TCalculation } from '@/types/price-component';
import React, { useEffect, useState } from 'react';
interface PageProps {
    calculation: TCalculation
}
const PriceDefinitionCalculation = ({ calculation }: PageProps) => {
    const [data, setData] = useState("");

    useEffect(() => {
        setData(calculationRenderer(calculation));

    }, [])
    function calculationRenderer(calculation: TCalculation) {
        let string = "RATE * ";
        if (calculation && Object.keys(calculation).length > 0) {
            string += calculateMultipliersRate(calculation)
        }
        // string += ' * (Quantity * Factor) <span>Ponderation Power</span>'
        return string;
    }

    function calculateMultipliersRate(calculation: TCalculation) {
        if (calculation.multipliers && calculation.multipliers.length > 0) {
            let string = '((<i style="font-style: italic;color: #2a69a2;">' + calculation.measure.value + `</i>*${calculation.factor})^${calculation.ponderationPower}) `;
            let childArray: Array<any> = [];
            calculation.multipliers.forEach((c: TCalculation) => {
                childArray.push(calculateMultipliersRate(c));
            })
            string += ("*" + childArray.join("*") + "");
            return string;
        } else {
            return ' ((' + (calculation.measure ? calculation.measure.value + `* ${calculation.factor})^${calculation.ponderationPower}) ` : "");
        }
    }
    return (
        <div>{data}</div>
    );
};

export default PriceDefinitionCalculation;