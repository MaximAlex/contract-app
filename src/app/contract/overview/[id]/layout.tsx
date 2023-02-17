import Link from 'next/link';
interface PageProps {
    children: any;
    params: {
        id: string
    }
}
const layout = ({ children, params: { id } }: PageProps) => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active"  href={"/contract/overview/" + id}>Overview</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  href={"/contract/overview/" + id + "/price-components"}>Price components</Link>
                </li>
            </ul>

            <div>
                {children}
            </div>
        </>
    );
};

export default layout;