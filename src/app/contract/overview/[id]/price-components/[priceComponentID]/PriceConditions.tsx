import Toolbar from '@/components/toolbar';
import { TPriceComponent } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import { unique_key } from '@/utils/unique_key';
import { useState } from 'react';
import PriceConditionForm from './PriceConditionForm';
interface PageProps {
    conditions: Array<TPriceCondition>
    updateConditions: Function
}
const PriceConditions = ({ conditions, updateConditions }: PageProps) => {
    const [data, setData] = useState(conditions)
    const [showForm, setShowForm] = useState(false)
    const [condition, setCondition] = useState(init());
    const [conditionIndex, setConditionIndex] = useState(-1);
    function save(item: TPriceCondition) {
        // add a new condition
        let newData: Array<TPriceCondition> = [];
        if (conditionIndex === -1) {
            newData = [item, ...data];
        } else {
            //update an existing condition
            data[conditionIndex] = item;
            newData = [...data];
        }
        setData(newData);
        updateConditions(newData)
    }
    function onEdit(d: TPriceComponent, index: number) {
        console.log(d);
        setConditionIndex(index);
        setCondition(d);
        setShowForm(true)
    }
    function init() {
        return {
            measure: "",
            unit: "",
            timeBasis: "",
            rounding: {
                mode: {},
                scale: 0
            },
            operator: {},
            value: "",
            value2: ""
        } as any
    }
    function onAdd() {
        setConditionIndex(-1);
        setCondition(init());
        setShowForm(true)
    }
    function onDelete(index: number) {
        if (confirm("Are you sure ?")) {
            let newData = [...data];
            newData.splice(index, 1);
            setData(newData);
            updateConditions(newData)
        }
    }
    return (
        <>
            {showForm ? (
                <PriceConditionForm save={save} priceCondition={condition} toggleForm={setShowForm} />
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
                        <th scope="col">Unit</th>
                        <th scope="col">Time Basis</th>
                        <th scope="col">Rounding</th>
                        <th scope="col">Scale</th>
                        <th scope="col">Operator</th>
                        <th scope="col">Value 1</th>
                        <th scope="col">Value 2</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {data && data.map((d: TPriceCondition, index: number) => (
                        <tr key={unique_key()}>
                            <td>
                                {d.measure?.type.value}
                            </td>
                            <td>
                                {d.measure?.value}
                            </td>
                            <td>
                                {d.unit ? d.unit.code : ""}
                            </td>
                            <td>
                                {d.timeBasis ? d.timeBasis.value : ""}
                            </td>
                            <td>
                                {d.rounding ? d.rounding.mode.code : ""}
                            </td>
                            <td>
                                {d.rounding ? d.rounding.precision : ""}
                            </td>
                            <td>
                                {d.operator?.name}</td>
                            <td> {d.value}</td>
                            <td> {d.value2}</td>
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

export default PriceConditions;