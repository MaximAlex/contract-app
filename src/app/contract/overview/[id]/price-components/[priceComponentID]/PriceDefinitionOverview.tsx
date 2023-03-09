import { PriceComponentContext } from '@/contexts/price-components.context';
import { Definition, TCalculation, TPricing } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import { TPriceParamters } from '@/types/price-paramters';
import { useContext } from 'react';
import PriceCalculation from './PriceCalculation';
import PriceConditions from './PriceConditions';
import PriceParameters from './PriceParamters';
import Pricing from './Pricing';
interface PageProps {
    index: number;
    definition: Definition
}
const PriceDefinitionOverview = ({ definition, index }: PageProps) => {
    const { data, setData } = useContext(PriceComponentContext)
    function updateConditions(conditions: Array<TPriceCondition> = []) {
        if (!data.definitions) {
            data.definitions = [];
        }
        data.definitions[index].conditions = conditions;
        setData({ ...data })
    }
    function updateParameters(parameters: Array<TPriceParamters> = []) {
        if (!data.definitions) {
            data.definitions = [];
        }
        data.definitions[index].parameters = parameters;
        setData({ ...data })
    }
    function updatePricing(pricing: Array<TPricing> = []) {
        if (!data.definitions) {
            data.definitions = [];
        }
        data.definitions[index].pricing = pricing;
        setData({ ...data })
    }
    function updateCalculation(calculation: TCalculation) {
        if (!data.definitions) {
            data.definitions = [];
        }
        data.definitions[index].calculation = calculation;
        console.log(calculation)
        setData({ ...data })
    }
    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link" id="nav-profile-tab active" data-bs-toggle="tab" data-bs-target="#calculation" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Calculation <span className="badge rounded-pill bg-primary"></span>
                    </button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Conditions <span className="badge rounded-pill bg-primary">{definition.conditions ? definition.conditions.length : ""}</span>
                    </button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#parameters" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        Parameters <span className="badge rounded-pill bg-primary">{definition.parameters ? definition.parameters.length : ""}</span>
                    </button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#pricing" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Pricing <span className="badge rounded-pill bg-primary">{definition.pricing ? definition.pricing.length : ""}</span>
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="calculation" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PriceCalculation calculation={definition.calculation} updateCalculation={updateCalculation}></PriceCalculation>
                </div>
                <div className="tab-pane fade show" id="conditions" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PriceConditions conditions={definition.conditions} updateConditions={updateConditions}></PriceConditions>
                </div>
                <div className="tab-pane fade" id="parameters" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <PriceParameters paramters={definition.parameters} updateParameters={updateParameters}></PriceParameters>
                </div>
                <div className="tab-pane fade" id="pricing" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <Pricing pricing={definition.pricing || []} updatePricing={updatePricing} />
                </div>
            </div>
        </>
    );
};

export default PriceDefinitionOverview;