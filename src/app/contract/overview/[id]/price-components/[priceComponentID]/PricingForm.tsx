import Toolbar from '@/components/toolbar';
import { TPricing } from '@/types/price-component';
import { handleChange } from '@/utils/form/handleChange';
import { useState } from 'react';
interface PageProps {
    price: TPricing;
    save: Function;
    toggleForm: Function
}
const PricingForm = ({ price, save, toggleForm }: PageProps) => {
    const [data, setData] = useState(price || [])
    function onSave() {
        save(data);
        toggleForm(false)
    }
    return (
        <>
            <Toolbar>
                <button className='btn btn-primary' onClick={() => onSave()}>Save</button>
                <button className='btn btn-danger' onClick={() => toggleForm(false)}>Close</button>
            </Toolbar>
            <form>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Valid from</label>
                            <input type="date" className="form-control" value={price.validity?.from} name="validity.from" onChange={(event) => handleChange(event, data, setData)} />
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Valid to</label>
                        <input type="date" className="form-control" value={price.validity?.to} name="validity.to" onChange={(event) => handleChange(event, data, setData)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Amount</label>
                        <input type="number" className="form-control" value={price.amount} name="amount" onChange={(event) => handleChange(event, data, setData)} />
                    </div>
                </div>
            </form>

        </>
    );
};

export default PricingForm;

