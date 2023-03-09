import Table from "@/components/table";
import Toolbar from "@/components/toolbar";
import ContractService from "@/services/contract.service";
import { TContract } from "@/types/contract";
import Link from "next/link";
import ContracListActions from "./contract-list-actions";
export const revalidate = 0;
export default async function ContracList() {
    const response = await ContractService.getAll();
    const contracts: Array<TContract> = await response.json();
    const columns: Array<any> = [{
        key: "code",
        name: "Code"
    }, {
        key: "holder.code",
        name: 'Holder'
    }, {
        key: "counterparty.code",
        name: 'Counterparty'
    }]
    return (
        <>
            <Toolbar>
                <Link className="btn btn-primary" href={"contract/0"}>
                    <i className="bi bi-plus-circle"></i>
                    Add
                </Link>
            </Toolbar>
            <Table columns={columns} data={contracts} actionsComponent={ContracListActions}>
                {/* <ContracListActions contract={{id:"31232"}}></ContracListActions> */}
            </Table>

        </>
    )
}
