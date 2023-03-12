export default function Drawer ({ children }) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="pl-5 pt-5">
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button flex flex-col items-center w-20 bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700 dark:text-white text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                {children[0]}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                {children[1]}
            </div>
        </div>
    )
}