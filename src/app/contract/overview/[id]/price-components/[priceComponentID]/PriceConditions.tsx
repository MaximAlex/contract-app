import { TPriceCondition } from '@/types/price-conditions';
interface PageProps {
    conditions: Array<TPriceCondition>
}
const PriceConditions = ({ conditions }: PageProps) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Measure type</th>
                    <th scope="col">Measure</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Time Basis</th>
                    <th scope="col">Rounding</th>
                    <th scope="col">Scale</th>
                    <th scope="col">Operator</th>
                    <th scope="col">Value1</th>
                    <th scope="col">2</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {conditions && conditions.map((d: TPriceCondition) => (
                    <tr key={d.id}>
                        <td>
                            {d.measure?.type.value}
                        </td>
                        <td>
                            {d.measure?.value}
                        </td>
                        <td>
                            {d.unit ? d.unit.code : ""}
                        </td>
                        <td>
                            {d.timeBasis ? d.timeBasis.value : ""}
                        </td>
                        <td>
                            {d.rounding ? d.rounding.roundingMode : ""}
                        </td>
                        <td>
                            {d.rounding ? d.rounding.precision : ""}
                        </td>
                        <td>
                            {d.operator?.name}</td>
                        <td> {d.value}</td>
                        <td> {d.value2}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default PriceConditions;