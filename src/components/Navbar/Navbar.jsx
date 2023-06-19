import React from "react";
import { MenuBar } from "./MenuBar.jsx";
import { AvatarComp } from "./Avatar.jsx";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

export const Navbar = () => {
	return (
		<div className="flex items-center justify-center bg-white p-[3px] shadow-[0_2px_10px] shadow-blackA7">
			<div className="flex w-[90vw] h-[80px] gap-4 justify-between items-center ">
				<div className="w-[150px] ">
					<Image
						className="h-[50px]"
						src="/logo.svg"
						width={10000}
						height={10000}
						alt="logo"
					/>
				</div>
				<div className="justify-self-end w-[100vw]">
					<MenuBar />
				</div>
				<div className="flex items-center gap-[10px]">
					<FaBell size="1.5em" />
					<AvatarComp />
				</div>
			</div>
		</div>
	);
};
