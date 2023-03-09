import Toolbar from '@/components/toolbar';
import { PriceComponentContext } from '@/contexts/price-components.context';
import { TPricing } from '@/types/price-component';
import { handleChange } from '@/utils/form/handleChange';
import { unique_key } from '@/utils/unique_key';
import { useContext, useState } from 'react';
import PricingForm from './PricingForm';
interface PageProps {
    pricing: Array<TPricing>,
    updatePricing: Function
}
const Pricing = ({ pricing, updatePricing }: PageProps) => {
    const [priceData, setPriceData] = useState(pricing || [])
    const [price, setPrice] = useState({} as TPricing);
    const [priceIndex, setPriceIndex] = useState(-1);
    const [showForm, setShowForm] = useState(false);
    function onAdd() {
        setPrice({});
        setShowForm(true);
    }
    function save(item: TPricing) {
        // add a new condition
        let newData: Array<TPricing> = [];
        if (priceIndex === -1) {
            newData = [item, ...priceData];
        } else {
            //update an existing condition
            priceData[priceIndex] = item;
            newData = [...priceData];
        }
        setPriceData(newData);
        updatePricing(newData)
    }
    function toggleForm(flag: boolean) {
        setShowForm(flag);
    }

    function onDelete(index: number) {
        if (confirm("Are you sure ?")) {
            let newData = [...priceData];
            newData.splice(index, 1);
            setPriceData(newData);
            updatePricing(newData)
        }
    }
    function onEdit(price: TPricing, index: number): void {
        setPriceIndex(index);
        setPrice(price);
        toggleForm(true);
    }
    return (
        <>
            {showForm ? (
                <PricingForm price={price} save={save} toggleForm={toggleForm}></PricingForm>
            ) : (
                <Toolbar>
                    <button className='btn btn-primary' onClick={() => onAdd()}>Add</button>
                </Toolbar>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Amount</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {priceData && priceData.map((d, index: number) => (
                        <tr key={unique_key()}>
                            <td>
                                {d.validity?.from}
                            </td>
                            <td>
                                {d.validity?.to}
                            </td>
                            <td>
                                {d.amount}
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={() => onEdit(d, index)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
};

export default Pricing;

