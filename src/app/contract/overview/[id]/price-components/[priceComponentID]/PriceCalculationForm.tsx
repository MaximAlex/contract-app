import LovComponent from '@/components/lov-component';
import Toolbar from '@/components/toolbar';
import { PriceCalculationContext } from '@/contexts/price-calculation.context';
import MeasureService from '@/services/measure.service';
import RoundingService from '@/services/rounding.service';
import UnitService from '@/services/unit.service';
import { TCalculation } from '@/types/price-component';
import { handleChange, handleLovChange } from '@/utils/form/handleChange';
import { useContext, useState } from 'react';
interface PageProps {
    // save: any
    // priceCondition: TPriceCondition,
    toggleForm: Function
    prefix: string;
    calculation: TCalculation
}
const PriceCalculationForm = ({ calculation, toggleForm, prefix }: PageProps) => {
    const [calculationData, setCalculationData] = useState(calculation);
    const { onCalculationSave } = useContext(PriceCalculationContext)
    function save() {
        onCalculationSave(calculation, prefix);
        toggleForm(false)
    }
    return (
        <>
            <Toolbar>
                <button className='btn btn-primary' onClick={() => { save() }}>Save</button>
                <button className='btn btn-danger' onClick={() => { toggleForm(false) }}>Close</button>
            </Toolbar>
            <form>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={MeasureService.getAll}
                                value={calculationData.measure}
                                required={true}
                                dropdownProperties={"value"}
                                onItemSelect={(newValue: any) => handleLovChange(calculationData, 'measure', newValue, setCalculationData)}
                                label={"Measure"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={UnitService.getAll}
                                value={calculationData.unit}
                                required={true}
                                dropdownProperties={"code,name"}
                                onItemSelect={(newValue: any) => handleLovChange(calculationData, 'unit', newValue, setCalculationData)}
                                label={"Unit"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            {/* <LovComponent
                                requestMethod={TimeBasisService.getAll}
                                value={calculationData.timeBasis}
                                dropdownProperties={"value"}
                                onItemSelect={(newValue: any) => handleLovChange(data, 'timeBasis', newValue, setCalculationData)}
                                label={"Time basis"}></LovComponent> */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={RoundingService.getAll}
                                value={calculationData?.rounding?.mode}
                                dropdownProperties={"name"}
                                onItemSelect={(newValue: any) => handleLovChange(calculationData, 'rounding.mode', newValue, setCalculationData)}
                                label={"Rounding"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <label>Scale</label>
                            <input type="number" className="form-control" name="rounding.precision" value={calculationData.rounding?.precision} onChange={(e) => { handleChange(e, calculationData, setCalculationData) }} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label>Factor</label>
                            <input type="number" className="form-control" name="factor" value={calculationData.factor} onChange={(e) => { handleChange(e, calculationData, setCalculationData) }} />
                        </div>
                        <div className="mb-3">
                            <label>Value 2</label>
                            <input type="number" className="form-control" name="ponderationPower" value={calculationData.ponderationPower} onChange={(e) => { handleChange(e, calculationData, setCalculationData) }} />
                        </div>
                    </div>
                </div>
            </form>
        </>

    );
};

export default PriceCalculationForm;


