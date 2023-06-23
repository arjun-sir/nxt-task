import React from "react";
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoDocumentText, IoChatbubblesOutline } from "react-icons/io5";

export const CardDialHeader = () => {
	return (
		<div>
			<div className="flex justify-between items-start gap-4">
				<Image
					className="w-[50px]"
					src="/dialog-svg.svg"
					width={10000}
					height={10000}
					alt="svg-img"
				/>
				<div className="space-y-1 w-[100%] justify-self-start">
					<h3>UI/UX Designer (Mobile Apps)</h3>
					<div className="flex gap-4">
						<div className="flex gap-1 items-center justify-center text-[#5A5A5A]">
							<MdOutlineHomeWork />
							<p className="text-[12px]">PIXTER STUDIO</p>
						</div>
						<div className="flex gap-1 items-center justify-center text-[#5A5A5A]">
							<FaMapMarkerAlt size="0.8em" />
							<p className="text-[12px]">
								Ahmedabad, Gujrat, India
							</p>
						</div>
						<div className="flex gap-1 items-center justify-center text-[#5A5A5A]">
							<RiMoneyDollarCircleFill />
							<p className="text-[12px]">
								Ahmedabad, Gujrat, India
							</p>
						</div>
						<a href="#">
							<p className="text-[#8246FD] text-[12px]">
								View Job details
							</p>
						</a>
					</div>
					<div>
						<p className="text-[12px] text-[#9E9E9E]">
							Job added from linkedin.com on Tue May 30 2023.
						</p>
					</div>
				</div>
				<div className="flex gap-2 mr-4">
					<button className="bg-[#EF4444] text-white   inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
						Delete
					</button>
					<button className="h-[35px]">
						<select
							className="box-border min-w-[50px]  shadow-[#E4E4E4] inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
							required
						>
							<option value="Saved">Saved</option>
							<option value="Applied">Applied</option>
							<option value="Interviewing">Interviewing</option>
							<option value="Offer">Offer</option>
						</select>
					</button>
				</div>
			</div>
			<div className="flex gap-4 py-4 border-y border-[#DCDCDC] my-4">
				<button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7  flex h-[30px] items-center justify-center gap-2 rounded-[4px] px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
					<IoDocumentAttachSharp />
					<p className="text-[12px] mt-[2px]">Resume Name 75%</p>
				</button>
				<button className="text-[#9E9E9E] border border-[#9E9E9E] flex h-[30px] items-center justify-center gap-2 rounded-[4px] px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
					<IoDocumentText />
					<p className="text-[12px] mt-[2px]">Cover Letter Name</p>
				</button>
				<button className="text-[#9E9E9E] border border-[#9E9E9E] flex h-[30px] items-center justify-center gap-2 rounded-[4px] px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
					<IoChatbubblesOutline />
					<p className="text-[12px] mt-[2px]">Mock Interview</p>
				</button>
			</div>
		</div>
	);
};
