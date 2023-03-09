import { PriceCalculationContext } from '@/contexts/price-calculation.context';
import { TCalculation } from '@/types/price-component';
import { unique_key } from '@/utils/unique_key';
import { useContext, useState } from 'react';
import PriceCalculationForm from './PriceCalculationForm';
interface ComponentProps {
    calculation: TCalculation
    prefix: string;
    isParent: boolean;
}
const PriceCalculationItem = ({ calculation, prefix, isParent }: ComponentProps) => {
    const [editMode, setEditMode] = useState(false)
    const { onCalculationSave } = useContext(PriceCalculationContext)
    function onEdit() {
        setEditMode(true);
    }
    function onAdd() {
        calculation.multipliers.unshift({});
        onCalculationSave(calculation, prefix);
    }
    return (
        <>
            {editMode ? (
                <tr>
                    <td colSpan={10}>
                        <PriceCalculationForm calculation={calculation} toggleForm={setEditMode} prefix={prefix}></PriceCalculationForm>
                    </td>
                </tr>
            ) : (
                <>
                    <tr>
                        <td>
                            {isParent ? prefix : "---" + prefix}
                            <button onClick={() => onAdd()}>
                            <i className="bi bi-plus-circle-fill"></i>
                            </button>
                        </td>
                        <td>{calculation.measure ? calculation.measure.type.value : ""}</td>
                        <td>{calculation.measure ? calculation.measure.value : ""}</td>
                        <td>{calculation.unit ? calculation.unit.code : ""}</td>
                        <td></td>
                        <td>{calculation.rounding && calculation.rounding.roundingMode ? calculation.rounding.roundingMode : ""}</td>
                        <td>{calculation.rounding && calculation.rounding.precision ? calculation.rounding.precision : ""}</td>
                        <td>{calculation.factor}</td>
                        <td>{calculation.ponderationPower}</td>
                        <td>
                            <button onClick={() => onEdit()} className="btn btn-primary">Edit</button>
                        </td>
                    </tr>
                </>
            )}
            {calculation.multipliers && calculation.multipliers.length > 0 ? (
                calculation.multipliers.map((calc, index) => (
                    <PriceCalculationItem key={unique_key()}
                        calculation={calc}
                        isParent={false}
                        prefix={prefix + "." + (index + 1)}></PriceCalculationItem>
                )

                )
            ) : ("")}
        </>
    );
};

export default PriceCalculationItem;