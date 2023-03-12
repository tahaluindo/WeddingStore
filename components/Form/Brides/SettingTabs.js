import * as Tabs from '@radix-ui/react-tabs';
import { useEffect } from 'react';
import { useRef } from 'react';
import { settingTabTriggerModels } from '../../../models/settingTabModel';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const SettingTabs = ({ children }) => {
    return (

        <section className='w-full flex justify-center px-2 font-[poppins]'>
            <div className='mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white'>
                <div className="flex justify-center">
                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Settings</span>
                </div>
                <Tabs.Root className="TabsRoot" defaultValue="settingTabChangePassword">
                    <Tabs.List className="TabsList" aria-label="Manage your account">
                        {
                            settingTabTriggerModels.map((item) => {
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
                    {children}
                </Tabs.Root>
            </div>
        </section>

    )
}

export default SettingTabs