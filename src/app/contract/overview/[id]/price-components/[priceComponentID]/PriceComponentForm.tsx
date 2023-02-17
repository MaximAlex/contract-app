"use client";
import LovComponent from "@/components/lov-component";
import { PriceComponentContext } from "@/contexts/price-components.context";
import CostElementService from "@/services/cost-element.service";
import CounterpartyService from "@/services/counterparty.service";
import CurrencyService from "@/services/currency.service";
import { handleChange, handleLovChange } from "@/utils/form/handleChange";
import { useContext } from "react";

const PriceComponentForm = () => {
    const { data, setData } = useContext(PriceComponentContext);
    return (
        <form>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input type="text" minLength={3} maxLength={10} required className="form-control" name="name" value={data?.name} onChange={(e) => { handleChange(e, data, setData) }} />
                    </div>
                    <div className="mb-3">
                        <LovComponent
                            requestMethod={CostElementService.getAll}
                            value={data.category}
                            required={true}
                            dropdownProperties={"code,name"}
                            onItemSelect={(newValue: any) => handleLovChange(data, 'category', newValue, setData)}
                            label={"CostElement"}></LovComponent>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Valid from</label>
                        <input type="date" className="form-control" value={data.validity?.from} name="validityPeriod.from" onChange={(event) => handleChange(event, data, setData)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Valid to</label>
                        <input type="date" className="form-control" value={data.validity?.to} name="validityPeriod.to" onChange={(event) => handleChange(event, data, setData)} />
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <LovComponent
                            requestMethod={CurrencyService.getAll}
                            value={data.currency}
                            required={true}
                            dropdownProperties={"currencyCode"}
                            onItemSelect={(newValue: any) => handleLovChange(data, 'currency', newValue, setData)}
                            label={"Currency"}></LovComponent>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PriceComponentForm;