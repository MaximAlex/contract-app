import { PriceComponentContext } from '@/contexts/price-components.context';
import { Definition } from '@/types/price-component';
import { useContext, useState } from 'react';
import PriceConditionsRenderer from './PriceConditionsRenderer';
import PriceDefinitionBasis from './PriceDefinitionBasis';
import PriceDefinitionCalculation from './PriceDefinitionCalculation';
import PriceDefinitionOverview from './PriceDefinitionOverview';
import PriceParametersRenderer from './PriceParamtersRenderer';

const PriceDefinition = () => {
    const { data } = useContext(PriceComponentContext)
    const [selectedRow, setSelectedRow] = useState({
        id: ""
    } as any);
    function onRowClicked(d: Definition) {
        setSelectedRow(d);
    }
    return (
        <>
            {/* <Link className="btn btn-primary" href={"contract/0"}>Add</Link> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Rate</th>
                        <th scope="col">Basis</th>
                        <th scope="col">Calculation</th>
                        <th scope="col">Conditions</th>
                        <th scope="col">Parameters</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.definitions?.map((d: Definition) => (
                        <tr key={d.id} onClick={() => onRowClicked(d)}>
                            <td>{d.rate ? d.rate.name : ""}</td>
                            <td>
                                <PriceDefinitionBasis calculation={d.calculation}></PriceDefinitionBasis>
                            </td>
                            <td>
                                <PriceDefinitionCalculation calculation={d.calculation}></PriceDefinitionCalculation>
                            </td>
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

export default PriceDefinition;