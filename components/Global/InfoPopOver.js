import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { GrClose } from 'react-icons/gr';

const InfoPopOver = ({ children, messsage }) => {
    return (
        <>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <div className="text-black hover:bg-gray-200 inline-flex h-6 w-6 items-center justify-center rounded-full">
                        {children}
                    </div>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className="rounded-xl p-5 w-[350px] bg-red-500 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.black)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                    >
                        <span className="text-black" dangerouslySetInnerHTML={{ __html: messsage }}></span>
                        <Popover.Close
                            className="rounded-full h-[20px] w-[20px] inline-flex items-center justify-center text-white absolute top-[5px] right-[5px] hover:bg-white outline-none cursor-default"
                            aria-label="Close"
                        >
                            <GrClose />
                        </Popover.Close>
                        <Popover.Arrow className="fill-red-500" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </>
    );
};

export default InfoPopOver;