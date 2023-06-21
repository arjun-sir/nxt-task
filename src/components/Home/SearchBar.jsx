import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CreateDialog } from "../CreateDialog/CreateDialog";

export const SearchBar = () => {
	return (
		<div className="flex items-center justify-between bg-[#FFFFFF] p-4 ">
			<div>My 2023 Job Search</div>
			<div className="flex gap-4">
				<div className="flex gap-1 items-center justify-center border pl-2 rounded-sm border-[#DDDDDD] ">
					<AiOutlineSearch size="1.25em" />
					<input
						className="p-2 outline-none"
						type="search"
						placeholder="Search here"
					/>
				</div>
				<div>
					<CreateDialog />
				</div>
			</div>
		</div>
	);
};
