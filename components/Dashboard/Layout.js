import SideBar from "./SideBar"
import HelpButton from "../Global/HelpButton"
import * as Tabs from '@radix-ui/react-tabs';
import Drawer from "./Drawer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-[#EBF7FF] h-full min-h-screen relative">
                <Tabs.Root className="TabsRoot" defaultValue="sideBarTabForm">
                    <Drawer>
                        <main>
                            {children}
                            <HelpButton />
                        </main>
                        <SideBar />
                    </Drawer>
                </Tabs.Root>
            </div>
        </>
    )
}
export default Layout