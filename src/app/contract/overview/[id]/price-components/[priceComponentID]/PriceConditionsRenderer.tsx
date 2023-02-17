import { Condition } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import React, { useEffect, useState } from 'react';
interface PageProps {
    conditions: Array<TPriceCondition>
}
const PriceConditionsRenderer = ({ conditions }: PageProps) => {
    const [conditionRenderer, setConditionRenderer] = useState("");
    useEffect(() => {
        setConditionRenderer(calculateConditions(conditions));

    }, [])
    function calculateConditions(conditions: Array<TPriceCondition>) {
        let string: string[] = [];
        if (conditions) {
            console.log(conditions)
            conditions.forEach((p: any) => {
                if (p.measure && p.operator && p.value) {
                    if (p.operator.id === "IN" || p.operator.id === "NOT_IN") {
                        if (p.value2 && p.value2.length > 0) {
                            string.push(`<i style="font-style: italic;color: #2a69a2;">${p.measure.value}</i> ${p.operator.code} (<i>${p.value} - ${p.value2}</i>) ${p.unit ? p.unit.code : ""}`)
                        } else {
                            string.push(`<i style="font-style: italic;color: #2a69a2;">${p.measure.value}</i> ${p.operator.code} (<i>${p.value}</i>) ${p.unit ? p.unit.code : ""}`)
                        }
                    } else {
                        string.push(`<i style="font-style: italic;color: #2a69a2;">${p.measure.value}</i> ${p.operator.code} <i>${p.value}</i> ${p.unit ? p.unit.code : ""}`)
                    }
                }
            });
        }
        return string.join(", ");
    }
    return (
        <div dangerouslySetInnerHTML={{__html: conditionRenderer}}>
        </div >
    );
};

export default PriceConditionsRenderer;