import Image from 'next/image'
export default function Topnavbar({ toggleSidebar }: { toggleSidebar: Function }) {
    return (
        <>
            <div className="topnavbar flex-row display-flex">
                <button className='menu-toggle' onClick={() => toggleSidebar()}>
                    <i className="bi bi-list"></i>
                </button>
                <Image
                    src="/images/logo.svg"
                    alt="Skymetrix"
                    width={180}
                    height={30}
                />
            </div>
        </>
    )
}
