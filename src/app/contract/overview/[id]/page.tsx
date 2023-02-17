import ContractService from '@/services/contract.service';
import { TContract } from '@/types/contract';
import Link from 'next/link';
interface PageProps {
    params: {
        id: string
    }
}
const ContractOverview = async ({ params: { id } }: PageProps) => {
    const response = await ContractService.load(id);
    const contract: TContract = await response.json();
    return (
        <>
            <Link type="button" className="btn btn-primary" href={`contract/${id}`}>
                    Edit
            </Link>
            <form>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Code</label>
                            <input type="text" minLength={3} maxLength={10} required className="form-control" name="code" value={contract.code} disabled={true}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Counterparty</label>
                            <input type="text" minLength={3} maxLength={10} required className="form-control" name="code" value={contract.counterparty?.code} disabled={true} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label">Holder</label>
                            <input type="text" minLength={3} maxLength={10} required className="form-control" name="code" value={contract.holder?.code} disabled={true} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContractOverview;