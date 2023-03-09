import { PriceComponentContext } from '@/contexts/price-components.context';
import { PriceTier } from '@/types/price-component';
import { useContext, useState } from 'react';
import PriceConditionsRenderer from './PriceConditionsRenderer';
import PriceParametersRenderer from './PriceParamtersRenderer';
import PriceTierOverview from './PriceTierOverview';

const PriceTiers = () => {
    const { data } = useContext(PriceComponentContext)
    const [index, setIndex] = useState(-1);
    const [selectedRow, setSelectedRow] = useState({
        id: ""
    } as any);
    function onRowClicked(d: PriceTier,index:number) {
        setIndex(index);
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
                    {data && data.priceTiers?.map((d: PriceTier,index:number) => (
                        <tr key={d.id} onClick={() => onRowClicked(d,index)}>
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
                <PriceTierOverview tier={selectedRow} index={index}></PriceTierOverview>
            ) : ("")}
        </>
    )
};

export default PriceTiers;