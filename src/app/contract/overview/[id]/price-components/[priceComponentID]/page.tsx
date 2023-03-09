"use client"
import { PriceComponentContext } from '@/contexts/price-components.context';
import PriceComponentsService from '@/services/price-components.service';
import { TPriceComponent } from '@/types/price-component';
import { useEffect, useState } from 'react';
import PriceComponentForm from './PriceComponentForm';
import PriceDefinition from './PriceDefinition';
import PriceTiers from './PriceTiers';
interface PageProps {
    params: {
        priceComponentID: string
    }
}
const PriceComponent = ({ params: { priceComponentID } }: PageProps) => {
    const [data, setData] = useState(init());
    function init(): TPriceComponent {
        return {
            name: "",
            category: {
                id: ""
            },
            currency: {
                id: ""
            },
            definitions: [],
            validity: {
                from: "",
                to: ""
            }
        }
    }
    async function onSave() {
        const updatedData = await PriceComponentsService.update(data);
    }

    useEffect(() => {
        async function getData() {
            const response = await PriceComponentsService.load(priceComponentID);
            const data: TPriceComponent = await response.json();
            setData(data);
        }
        getData();
    }, [])
    return (
        <div>
            <PriceComponentContext.Provider value={{ data, setData, savePriceComponent: onSave }}>
                <button className='btn btn-primary' onClick={() => onSave()}>Save</button>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                General data
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <PriceComponentForm></PriceComponentForm>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Price definition
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse  " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <PriceDefinition></PriceDefinition>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Price Tiers
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <PriceTiers></PriceTiers>
                            </div>
                        </div>
                    </div>
                </div>
            </PriceComponentContext.Provider>
        </div>
    );
};

export default PriceComponent;