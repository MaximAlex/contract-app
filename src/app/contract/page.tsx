import ContracList from "./contract-list";

export default async function ContractPage() {
    return (
        <>
        {/* @ts-expect-error Server Component */}
            {<ContracList></ContracList>}
        </>
    )
}
