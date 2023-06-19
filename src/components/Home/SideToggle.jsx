"use client";
import React, { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IoGridSharp, IoArchive } from "react-icons/io5";
import { MdGroups, MdLightbulb } from "react-icons/md";
import { TfiLoop } from "react-icons/tfi";
import { BsBugFill } from "react-icons/bs";

const toggleGroupItemClasses =
	"hover:bg-violet3 color-mauve11 data-[state=on]:bg-[#8246FD] data-[state=on]:text-white flex h-[35px]  items-center justify-start px-4 py-8 bg-white gap-2 text-md leading-4 rounded-xl focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

export const SideToggle = () => {
	const [value, setValue] = useState("boards");

	return (
		<ToggleGroup.Root
			className="flex flex-col bg-[#FFFFFF] p-4 rounded space-y-4 shadow-[0_2px_10px] shadow-blackA7 space-x-px"
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
				Boards
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="networking"
				aria-label="Center aligned"
			>
				<MdGroups size="1.5em" />
				Networking
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="archive"
				aria-label="Right aligned"
			>
				<IoArchive size="1.5em" />
				Archive Jobs
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="loop"
				aria-label="Right aligned"
			>
				<TfiLoop size="1.5em" />
				Loop Settings
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="feature"
				aria-label="Right aligned"
			>
				<MdLightbulb size="1.5em" />
				Suggest a feature
			</ToggleGroup.Item>
			<ToggleGroup.Item
				className={toggleGroupItemClasses}
				value="issue"
				aria-label="Right aligned"
			>
				<BsBugFill size="1.5em" />
				Report an Issue
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	);
};
