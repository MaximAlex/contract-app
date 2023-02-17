import { TCalculation } from '@/types/price-component';
import React, { useEffect, useState } from 'react';
interface PageProps {
    calculation: TCalculation
}
const PriceDefinitionBasis = ({ calculation }: PageProps) => {
    const [data, setData] = useState("");

    useEffect(() => {
        setData(basisRenderer(calculation));

    }, [])


    function basisRenderer(calculation: any): string {
        let string: any = [];
        if (calculation && Object.keys(calculation).length > 0) {
            string = calculateBasis(calculation);
        }
        // console.log("renderer for", params.rowIndex, string, params.data);
        return string.join(",");
    }
    function calculateBasis(calculation: any): Array<string> {
        //calculation.measure.code
        let measureCode: any = calculation.measureType ? calculation.measureType.value : "";
        if (measureCode === "") {
            measureCode = calculation.measure && calculation.measure.type ? calculation.measure.type.value : "";
        }
        let array = [measureCode];
        if (calculation.multipliers && calculation.multipliers.length > 0) {
            calculation.multipliers.forEach((c: TCalculation) => {
                array = [...array, ...calculateBasis(c)];
            })
        }
        return array;
    }
    return (
        <div>{data}</div>
    );
};

export default PriceDefinitionBasis;