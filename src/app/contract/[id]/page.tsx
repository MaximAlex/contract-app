'use client'
import LovComponent from "@/components/lov-component";
import ContractService from "@/services/contract.service";
import CounterpartyService from "@/services/counterparty.service";
import HolderService from "@/services/holder.service";
import { TContract } from "@/types/contract";
import { handleChange, handleLovChange } from "@/utils/form/handleChange";
import Link from "next/link";
import { useEffect, useState } from "react";
interface PageProps {
    params: {
        id: string
    }
}

export default function ContractDetail({ params: { id } }: PageProps) {
    const [contract, setContract] = useState(init());
    async function onSave(event: any) {
        event.preventDefault();
        if (id === '0') {
            const addedContract = await ContractService.add(contract)
        } else {
            let data = await ContractService.update(contract);
        }
    }


    useEffect(() => {
        async function load() {
            let response = await ContractService.load(id)
            const data = await response.json();
            setContract(data);
        }
        if (id === "0") {
            setContract(init());
        } else {
            load();
        }
    }, [id])



    function init(): TContract {
        return {
            code: "",
            counterparty: undefined,
            holder: undefined,
            validityPeriod: {
                from: "",
                to: ""
            }
        }
    }
    return (
        <>
            <form onSubmit={onSave}>
                <Link type="button" className="btn btn-info" href={`contract/overview/${id}`}>Back</Link>
                <button type="submit" className="btn btn-primary">Save</button>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Code</label>
                            <input type="text" minLength={3} maxLength={10} required className="form-control" name="code" value={contract.code} custom-test={23}
                                onChange={(event) => handleChange(event, contract, setContract)}
                            />
                        </div>
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={CounterpartyService.getAll}
                                value={contract.counterparty}
                                required={true}
                                dropdownProperties={"code,name"}
                                onItemSelect={(newValue: any) => handleLovChange(contract, 'counterparty', newValue, setContract)}
                                label={"Counterparty"}></LovComponent>
                        </div>
                        <div className="mb-3">
                            <LovComponent
                                requestMethod={HolderService.getAll}
                                value={contract.holder}
                                dropdownProperties={"code,airlineCode2,name"}
                                onItemSelect={(newValue: any) => handleLovChange(contract, 'holder', newValue, setContract)}
                                label={"Holder"}></LovComponent>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Valid from</label>
                            <input type="date" className="form-control" value={contract.validityPeriod?.from} name="validityPeriod.from" onChange={(event) => handleChange(event, contract, setContract)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Valid to</label>
                            <input type="date" className="form-control" value={contract.validityPeriod?.to} name="validityPeriod.to" onChange={(event) => handleChange(event, contract, setContract)} />
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </form>

        </>
    )
}
