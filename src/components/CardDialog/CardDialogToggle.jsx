"use client";
import React, { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IoGridSharp, IoArchive } from "react-icons/io5";
import { MdGroups, MdLightbulb } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TfiLoop } from "react-icons/tfi";
import { BsBugFill } from "react-icons/bs";

const toggleGroupItemClasses =
	"hover:bg-violet3 color-mauve11 data-[state=on]:bg-[#F7F3FF] data-[state=on]:text-[#8246FD] flex h-[35px]  items-center justify-start px-4 py-4 bg-white gap-2 text-[12px] leading-4 rounded-xl focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

export const CardDialogToggle = () => {
	const [value, setValue] = useState("boards");

	return (
		<ToggleGroup.Root
			className="flex flex-col bg-[#FFFFFF]  rounded space-y-4 h-full space-x-px"
			type="single"
			value={value}
			onValueChange={(value) => {
				if (value) setValue(value);
			}}
			aria-label="Text alignment"
		>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="boards"
				aria-label="Left aligned"
			>
				<IoGridSharp size="1.5em" />
				Job Description
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="networking"
				aria-label="Center aligned"
			>
				<MdOutlineHomeWork size="1.5em" />
				Company
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="archive"
				aria-label="Right aligned"
			>
				<LuFileSpreadsheet size="1.5em" />
				Note
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="loop"
				aria-label="Right aligned"
			>
				<MdGroups size="1.5em" />
				Networking
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	);
};
