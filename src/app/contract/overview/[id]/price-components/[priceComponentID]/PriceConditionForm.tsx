import LovComponent from '@/components/lov-component';
import Toolbar from '@/components/toolbar';
import MeasureService from '@/services/measure.service';
import OperatorService from '@/services/operator.service';
import RoundingService from '@/services/rounding.service';
import TimeBasisService from '@/services/time-basis.service';
import UnitService from '@/services/unit.service';
import { TPriceCondition } from '@/types/price-conditions';
import { handleChange, handleLovChange } from '@/utils/form/handleChange';
import { useState } from 'react';
interface PageProps {
    save: any
    priceCondition: TPriceCondition,
    toggleForm: Function
}
const PriceConditionForm = ({ save, priceCondition, toggleForm }: PageProps) => {
    const [data, setData] = useState(priceCondition);
    function onAdd() {
        setData(priceCondition);
        toggleForm(true);
    }
    function onSave() {
        save(data);
        toggleForm(false)
    }
    // function loadForm(item: TPriceCondition) {
    //     setData(item);
    //     toggleForm(true);
    // }
    return (
        <>
            <Toolbar>
                <button className='btn btn-primary' onClick={() => { onSave() }}>Save</button>
                <button className='btn btn-danger' onClick={() => { toggleForm(false) }}>Close</button>
            </Toolbar>
            <form>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={MeasureService.getAll}
                                value={data.measure}
                                required={true}
                                dropdownProperties={"value"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'measure', newValue, setData)}
                                label={"Measure"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={UnitService.getAll}
                                value={data.unit}
                                required={true}
                                dropdownProperties={"code,name"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'unit', newValue, setData)}
                                label={"Unit"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={TimeBasisService.getAll}
                                value={data.timeBasis}
                                dropdownProperties={"value"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'timeBasis', newValue, setData)}
                                label={"Time basis"}></LovComponent>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={RoundingService.getAll}
                                value={data?.rounding?.mode}
                                dropdownProperties={"name"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'rounding.mode', newValue, setData)}
                                label={"Rounding"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <label>Scale</label>
                            <input type="number" className="form-control" name="rounding.precision" value={data.rounding?.precision} onChange={(e) => { handleChange(e, data, setData) }} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={OperatorService.getAll}
                                value={data.operator}
                                required={true}
                                dropdownProperties={"name,code"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'operator', newValue, setData)}
                                label={"Operator"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <label>Value1</label>
                            <input type="number" className="form-control" name="value" value={data.value} onChange={(e) => { handleChange(e, data, setData) }} />
                        </div>
                        <div className="mb-3">
                            <label>Value 2</label>
                            <input type="number" className="form-control" name="value2" value={data.value2} onChange={(e) => { handleChange(e, data, setData) }} />
                        </div>
                    </div>
                </div>
            </form>
        </>

    );
};

export default PriceConditionForm;