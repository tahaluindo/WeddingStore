import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

const InfoTooltip = ({ children, messsage }) => {
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className="text-black hover:bg-gray-200 inline-flex h-6 w-6 items-center justify-center rounded-full">
                        {children}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="p-5 font-Poppins text-black shadow-black hover:bg-gray-200 inline-flex h-full w-full items-center justify-center rounded-xl bg-red-500 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black" sideOffset={5}>
                        <span dangerouslySetInnerHTML={{__html: messsage}}></span>
                        <Tooltip.Arrow className="TooltipArrow" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default InfoTooltip;