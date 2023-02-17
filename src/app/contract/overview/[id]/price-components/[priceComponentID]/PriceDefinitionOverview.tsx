import { PriceComponentContext } from '@/contexts/price-components.context';
import { Definition } from '@/types/price-component';
import { useContext } from 'react';
import PriceConditions from './PriceConditions';
import PriceParameters from './PriceParamters';
interface PageProps {
    definition: Definition
}
const PriceDefinitionOverview = ({ definition }: PageProps) => {

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link" id="nav-profile-tab active" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        Conditions <span className="badge rounded-pill bg-primary">{definition.conditions ? definition.conditions.length : ""}</span>
                    </button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#parameters" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        Parameters <span className="badge rounded-pill bg-primary">{definition.parameters ? definition.parameters.length : ""}</span>
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="conditions" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PriceConditions conditions={definition.conditions}></PriceConditions>
                </div>
                <div className="tab-pane fade" id="parameters" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <PriceParameters paramters={definition.parameters}></PriceParameters>
                </div>
            </div>
        </>
    );
};

export default PriceDefinitionOverview;