import { TPriceParamters } from '@/types/price-paramters';
interface PageProps {
    paramters: Array<TPriceParamters>
}
const PriceParameters = ({ paramters }: PageProps) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Measure type</th>
                    <th scope="col">Measure</th>
                    <th scope="col">Parameter</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Rounding</th>
                    <th scope="col">Scale</th>
                    <th scope="col">Operator</th>
                    <th scope="col">Start</th>
                    <th scope="col">Limit</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {paramters && paramters.map((d: TPriceParamters) => (
                    <tr key={d.id}>
                        <td>
                            {d.measure?.type.value}
                        </td>
                        <td>
                            {d.measure?.value}
                        </td>
                        <td>
                            {d.type ? d.type.value : ""}
                        </td>
                        <td>
                            {d.unit ? d.unit.code : ""}
                        </td>
                        <td>
                            {d.rounding ? d.rounding.roundingMode : ""}
                        </td>
                        <td>
                            {d.rounding ? d.rounding.precision : ""}
                        </td>
                        <td>
                            {d.operator?.name}</td>
                        <td> {d.start}</td>
                        <td> {d.limit}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default PriceParameters;