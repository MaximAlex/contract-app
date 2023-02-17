'use client'
import ContractService from "@/services/contract.service"
import { TContract } from "@/types/contract"
import Link from "next/link"
import { useRouter } from 'next/navigation';

interface PageProps {
    data: TContract
}
export default function ContracListActions({ data }: PageProps) {
    const router = useRouter();
    async function  onDelete() {
        const deletedContract = await ContractService.delete(data.id);
        router.refresh();
    }
    return (
        <>
            <Link href={'/contract/overview/' + data.id} className="btn btn-primary">Detail</Link>
            <button onClick={() => onDelete()} className="btn btn-danger">Delete</button>
        </>
    )
}