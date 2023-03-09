import Toolbar from '@/components/toolbar';
import { TPriceComponent } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import { TPriceParamters } from '@/types/price-paramters';
import { unique_key } from '@/utils/unique_key';
import { useState } from 'react';
import PriceParameterForm from './PriceParameterForm';
interface PageProps {
    paramters: Array<TPriceCondition>,
    updateParameters: Function
}
const PriceParameters = ({ paramters, updateParameters }: PageProps) => {
    const [data, setData] = useState(paramters || [])
    const [showForm, setShowForm] = useState(false)
    const [paramter, setParamter] = useState(init());
    const [paramterIndex, setParameterIndex] = useState(-1);
    function save(item: TPriceParamters) {
        // add a new condition
        let newData: Array<TPriceParamters> = [];
        if (paramterIndex === -1) {
            newData = [item, ...data];
        } else {
            //update an existing condition
            data[paramterIndex] = item;
            newData = [...data];
        }
        setData(newData);
        updateParameters(newData)
    }
    function onEdit(d: TPriceComponent, index: number) {
        setParameterIndex(index);
        setParamter(d);
        setShowForm(true)
    }
    function onAdd() {
        setParameterIndex(-1);
        setParamter(init());
        setShowForm(true)
    }
    function onDelete(index: number) {
        if (confirm("Are you sure ?")) {
            let newData = [...data];
            newData.splice(index, 1);
            setData(newData);
            updateParameters(newData)
        }
    }
    function init() {
        return {
            measure: {},
            unit: "",
            rounding: {
                mode: {},
                scale: 0
            },
            operator: {},
            start: "",
            limit: ""
        } as TPriceParamters
    }
    return (
        <>
            {showForm ? (
                <PriceParameterForm save={save} parameter={paramter} toggleForm={setShowForm} />
            ) : (
                <Toolbar>
                    <button className='btn btn-primary' onClick={() => onAdd()}>Add</button>
                </Toolbar>
            )
            }
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Measure type</th>
                        <th scope="col">Measure</th>
                        <th scope="col">Parameter</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Rounding</th>
                        <th scope="col">Scale</th>
                        <th scope="col">Operator</th>
                        <th scope="col">Start</th>
                        <th scope="col">Limit</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {paramters && paramters.map((d: TPriceParamters, index: number) => (
                        <tr key={unique_key()}>
                            <td>
                                {d.measure?.type.value}
                            </td>
                            <td>
                                {d.measure?.value}
                            </td>
                            <td>
                                {d.type ? d.type.value : ""}
                            </td>
                            <td>
                                {d.unit ? d.unit.code : ""}
                            </td>
                            <td>
                                {d.rounding ? d.rounding?.mode?.code : ""}
                            </td>
                            <td>
                                {d.rounding ? d.rounding.precision : ""}
                            </td>
                            <td>
                                {d.operator?.name}</td>
                            <td> {d.start}</td>
                            <td> {d.limit}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => onEdit(d, index)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
};

export default PriceParameters;