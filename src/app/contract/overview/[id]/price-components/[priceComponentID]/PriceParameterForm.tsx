import LovComponent from '@/components/lov-component';
import Toolbar from '@/components/toolbar';
import MeasureService from '@/services/measure.service';
import OperatorService from '@/services/operator.service';
import ParameterTypeService from '@/services/parameter_type';
import RoundingService from '@/services/rounding.service';
import TimeBasisService from '@/services/time-basis.service';
import UnitService from '@/services/unit.service';
import { TPriceCondition } from '@/types/price-conditions';
import { TPriceParamters } from '@/types/price-paramters';
import { handleChange, handleLovChange } from '@/utils/form/handleChange';
import { useState } from 'react';
interface PageProps {
    save: any
    parameter: TPriceParamters,
    toggleForm: Function
}
const PriceParameterForm = ({ save, parameter, toggleForm }: PageProps) => {
    const [data, setData] = useState(parameter);
    function onSave() {
        save(data);
        toggleForm(false)
    }
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
                                requestMethod={ParameterTypeService.getAll}
                                value={data.type}
                                required={true}
                                dropdownProperties={"value"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'type', newValue, setData)}
                                label={"Parameter type"}></LovComponent>
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
                            <input type="number" className="form-control" name="start" value={data.start} onChange={(e) => { handleChange(e, data, setData) }} />
                        </div>
                        <div className="mb-3">
                            <label>Value 2</label>
                            <input type="number" className="form-control" name="limit" value={data.limit} onChange={(e) => { handleChange(e, data, setData) }} />
                        </div>
                    </div>
                </div>
            </form>
        </>

    );
};

export default PriceParameterForm;