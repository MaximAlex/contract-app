import Link from "next/link";

export default function Sidemenu({ showSidebar }: { showSidebar: boolean }) {
    return (
        <>
         {/* " + showSidebar ? '' : ' hide' */}
            <div className={"side-menu"}>
                <ul id="menu">
                    <li className="nav-item">
                        <Link href="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> 
                            <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contract" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> 
                            <span className="ms-1 d-none d-sm-inline">Contracts</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
