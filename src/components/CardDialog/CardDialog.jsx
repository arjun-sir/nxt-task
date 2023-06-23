import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CardDialHeader } from "./CardDialHeader";
import { CardDialogToggle } from "./CardDialogToggle";
import { CardDialogInput } from "./CardDialogInput";
import { CardDialogTimeline } from "./CardDialogTimeline";

export const CardDialog = () => {
	return (
		<div>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[90vh] w-[90vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none sm:w-[80vw]">
					<CardDialHeader />
					<div className="flex w-[100%]">
						<div className="w-[20%] mr-[2.5%] pr-[2.5%] border-r">
							<CardDialogToggle />
						</div>
						<div className="w-[60%] h-[55vh] mr-[2.5%]">
							<CardDialogInput />
						</div>
						<div className="w-[17.55%] h-[55vh]">
							<CardDialogTimeline />
						</div>
					</div>
					<Dialog.Close asChild>
						<button
							className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
							aria-label="Close"
						>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</div>
	);
};
