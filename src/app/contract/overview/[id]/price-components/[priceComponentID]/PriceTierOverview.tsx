import { PriceComponentContext } from '@/contexts/price-components.context';
import { Definition } from '@/types/price-component';
import { TPriceCondition } from '@/types/price-conditions';
import { TPriceParamters } from '@/types/price-paramters';
import { useContext } from 'react';
import PriceConditions from './PriceConditions';
import PriceParameters from './PriceParamters';
interface PageProps {
    index: number;
    tier: any
}
const PriceTierOverview = ({ tier, index }: PageProps) => {
    const { data, setData } = useContext(PriceComponentContext)
    function updateConditions(conditions: Array<TPriceCondition> = []) {
        if (!data.priceTiers) {
            data.priceTiers = [];
        }
        data.priceTiers[index].conditions = conditions;
        setData({ ...data })
    }
    function updateParameters(parameters: Array<TPriceParamters> = []) {
        if (!data.definitions) {
            data.definitions = [];
        }
        data.definitions[index].parameters = parameters;
        setData({ ...data })
    }
    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link" id="nav-profile-tab active" data-bs-toggle="tab" data-bs-target="#conditions-tier" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Conditions <span className="badge rounded-pill bg-primary">{tier.conditions ? tier.conditions.length : ""}</span>
                    </button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#parameters-tier" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        Parameters <span className="badge rounded-pill bg-primary">{tier.parameters ? tier.parameters.length : ""}</span>
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="conditions-tier" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PriceConditions conditions={tier.conditions} updateConditions={updateConditions}></PriceConditions>
                </div>
                <div className="tab-pane fade" id="parameters-tier" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <PriceParameters paramters={tier.parameters} updateParameters={updateParameters}></PriceParameters>
                </div>
            </div>
        </>
    );
};

export default PriceTierOverview;