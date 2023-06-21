"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AiOutlineInfoCircle } from "react-icons/ai";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const CreateDialog = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="bg-[#FE5BAC] text-white p-2 text-[16px] font-semibold rounded-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
					Create
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
					<Dialog.Title className="text-mauve12 m-0 text-center text-[24px] font-semibold">
						Add Job
					</Dialog.Title>
					<Dialog.Description className="text-mauve11 text-center mt-[6px] mb-5 text-[16px] leading-normal">
						Create job card to track that job.
					</Dialog.Description>
					<Form.Root
						onSubmit={(event) => {
							wait().then(() => setOpen(false));
							event.preventDefault();
						}}
						className="w-[100%]"
					>
						<Form.Field className="grid mb-[10px]" name="email">
							<div className="flex items-baseline justify-between">
								<Form.Message
									className="text-[13px] text-red10 opacity-[0.8]"
									match="valueMissing"
								>
									Please enter your Company Name
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className="box-border w-full  shadow-[#E4E4E4] inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
									type="text"
									placeholder="Company Name"
									required
								/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Message
									className="text-[13px] text-red10 opacity-[0.8]"
									match="valueMissing"
								>
									Please enter your Job Title
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className="box-border w-full  shadow-[#E4E4E4] inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
									type="text"
									placeholder="Job Title"
									required
								/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<div className="flex items-baseline justify-between">
								<Form.Message
									className="text-[13px] text-red10 opacity-[0.8]"
									match="valueMissing"
								>
									Please enter your Job Url
								</Form.Message>
								<Form.Message
									className="text-[13px] text-red10 opacity-[0.8]"
									match="typeMismatch"
								>
									Please enter a valid url
								</Form.Message>
							</div>
							<Form.Control asChild>
								<input
									className="box-border w-full  shadow-[#E4E4E4] inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
									type="url"
									placeholder="Job Url"
									required
								/>
							</Form.Control>
						</Form.Field>
						<Form.Field className="grid mb-[10px]" name="question">
							<Form.Control asChild>
								<select
									className="box-border w-full  shadow-[#E4E4E4] inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
									required
								>
									<option value="Saved">Saved</option>
									<option value="Applied">Applied</option>
									<option value="Interviewing">
										Interviewing
									</option>
									<option value="Offer">Offer</option>
								</select>
							</Form.Control>
						</Form.Field>
						<div className="flex justify-between gap-4">
							<Dialog.Close asChild>
								<button
									className="box-border  w-full shadow-blackA7 hover:bg-mauve3 inline-flex h-[55px] items-center justify-center rounded-lg bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[30px]"
									aria-label="Close"
								>
									Cancel
								</button>
							</Dialog.Close>
							<Form.Submit asChild>
								<button className="box-border bg-[#FE5BAC]  w-full text-white shadow-blackA7  inline-flex h-[55px] items-center justify-center rounded-lg px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[30px]">
									Submit
								</button>
							</Form.Submit>
						</div>
					</Form.Root>

					<Dialog.Close asChild>
						<button
							className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
							aria-label="Close"
						>
							<Cross2Icon />
						</button>
					</Dialog.Close>
					<div className="flex justify-between items-center gap-2 bg-[#EDE9FE] text-[#5A5A5A] mt-[30px] text-[10px] p-4">
						<div className="self-start">
							<AiOutlineInfoCircle
								size="1.25em"
								color="#8246FD"
							/>
						</div>
						<div>
							Did you know? You can save job directly from our
							Extension and have all the data imported in a simple
							click! It takes just a few seconds
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
