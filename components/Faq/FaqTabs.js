import * as Tabs from '@radix-ui/react-tabs';
import { faqTabTriggerModels } from '../../models/faqTabModels';

export default function FaqTabs({ children }) {

    return (
        <>
            <Tabs.Root className="TabsRoot" defaultValue="order">
                <Tabs.List className="TabsList flex justify-center" aria-label="Manage your account">
                    {
                        faqTabTriggerModels.map((item) => {
                            return (
                                <Tabs.Trigger key={item.value} className="TabsTrigger flex-grow" value={item.value}>
                                    <a className="relative block p-4" >
                                        <div className="flex items-center justify-center">
                                            <span className="ml-3 text-sm font-medium text-gray-900">{item.label}</span>
                                        </div>
                                    </a>
                                </Tabs.Trigger>
                            )
                        })
                    }
                </Tabs.List>
                {children}
            </Tabs.Root>
        </>

    )
}