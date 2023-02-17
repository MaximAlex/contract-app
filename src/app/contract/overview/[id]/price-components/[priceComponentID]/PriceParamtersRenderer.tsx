import { Condition } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import { TPriceParamters } from '@/types/price-paramters';
import React, { useEffect, useState } from 'react';
interface PageProps {
    parameters: Array<TPriceParamters>
}
const PriceParametersRenderer = ({ parameters }: PageProps) => {
    const [parametersRenderer, setParametersRenderer] = useState("");
    useEffect(() => {
        setParametersRenderer(calculateParamters(parameters));

    }, [])
    function calculateParamters(parameters: Array<TPriceCondition>) {
        let string: string[] = [];
        if (parameters) {
            parameters.forEach((p: TPriceParamters) => {
                if (p.measure && p.measure.value) {
                    let text = `<i style="font-style: italic;color: #2a69a2;">${p.measure.value}</i>(${p.unit ? p.unit.code : "-"}, `;//= ${p.measure.value}(${p.unit ? p.unit.code : ""},${p.start} ${p.limit ? p.limit : "-"})
                    if (p.start && !p.limit) {
                        text += `${p.type && p.type.id === 'QUANTITY_FILTER' ? 'over' : 'after'} ${p.start}`;
                    } else if (p.start && p.limit) {
                        text += `${p.start} to ${p.limit}`;
                    } else if (p.limit && !p.start) {
                        text += `${p.type && p.type.id === 'TIME_FILTER' ? 'before' : 'below'} ${p.limit}`;
                    }
                    text += ")";
                    string.push(`${text}`)
                }
            }
            )
        }
        return string.join(", ");
    }
    return (
        <div dangerouslySetInnerHTML={{ __html: parametersRenderer }}>
        </div >
    );
};

export default PriceParametersRenderer;