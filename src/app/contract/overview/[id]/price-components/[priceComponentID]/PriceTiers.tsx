import { PriceComponentContext } from '@/contexts/price-components.context';
import { Definition, PriceTier } from '@/types/price-component';
import React, { useContext, useState } from 'react';
import PriceConditionsRenderer from './PriceConditionsRenderer';
import PriceDefinitionBasis from './PriceDefinitionBasis';
import PriceDefinitionCalculation from './PriceDefinitionCalculation';
import PriceDefinitionOverview from './PriceDefinitionOverview';
import PriceParametersRenderer from './PriceParamtersRenderer';

const PriceTiers = () => {
    const { data } = useContext(PriceComponentContext)
    const [selectedRow, setSelectedRow] = useState({
        id: ""
    } as any);
    function onRowClicked(d: PriceTier) {
        setSelectedRow(d);
    }
    return (
        <>
            {/* <Link className="btn btn-primary" href={"contract/0"}>Add</Link> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tier</th>
                        <th scope="col">Conditions</th>
                        <th scope="col">Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.priceTiers?.map((d: PriceTier) => (
                        <tr key={d.id} onClick={() => onRowClicked(d)}>
                            <td>{d.name}</td>
                            <td>
                                <PriceConditionsRenderer conditions={d.conditions}></PriceConditionsRenderer>
                            </td>
                            <td>
                                <PriceParametersRenderer parameters={d.parameters}></PriceParametersRenderer>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {selectedRow && selectedRow.id ? (
                <PriceDefinitionOverview definition={selectedRow}></PriceDefinitionOverview>
            ) : ("")}
        </>
    )
};

export default PriceTiers;