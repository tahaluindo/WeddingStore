import * as Tabs from '@radix-ui/react-tabs';
import { bridesTabTriggerModels } from '../../../models/bridesTabModels';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default function BridesTabs({ children, undanganSlug }) {

    return (
        <>
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    {
                        bridesTabTriggerModels.map((item) => {
                            return (
                                <Tabs.Trigger key={item.value} className="TabsTrigger" value={item.value}>
                                    <a className="relative block p-4" >
                                        <div className="flex items-center justify-center">
                                            {item.icon}
                                            <span className="ml-3 text-sm font-medium text-gray-900">{item.label}</span>
                                        </div>
                                    </a>
                                </Tabs.Trigger>
                            )
                        })
                    }
                </Tabs.List>
                <a
                    target='blank'
                    className="mt-3 group flex items-center justify-between rounded-lg border border-[#03385d] bg-[#03385d] px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                    href={`${baseUrl}/${undanganSlug}`}
                >
                    <span className="font-medium text-white transition-colors group-hover:text-[#03385d] group-active:text-[#03385d]">
                        Lihat Undangan
                    </span>
                    <span className="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-[#03385d] group-active:text-[#03385d]">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </a>
                {children}
            </Tabs.Root>
        </>

    )
}