import PriceComponentsService from "@/services/price-components.service";
import { TPriceComponent } from "@/types/price-component";
import Link from "next/link";
export const revalidate = 0;
interface PageProps {
    params: {
        id: string
    }
}
export default async function PriceComponents({ params: { id } }: PageProps) {
    const response = await PriceComponentsService.getAll(id);
    const priceComponents: Array<TPriceComponent> = await response.json();
    return (
        <>
            <Link className="btn btn-primary" href={"contract/0"}>Add</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {priceComponents && priceComponents.map((d: TPriceComponent) => (
                        <tr key={d.id}>
                            <td>{d.category ? d.category.code : ""}</td>
                            <td>{d.name}</td>
                            <td>
                                <Link href={`/contract/overview/${id}/price-components/${d.id}`} className="btn btn-primary">Detail</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}
