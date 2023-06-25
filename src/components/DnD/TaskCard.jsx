import React from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";
import { LuMoreVertical } from "react-icons/lu";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoDocumentText, IoChatbubblesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
const Draggable = dynamic(
	() =>
		import("react-beautiful-dnd").then((mod) => {
			return mod.Draggable;
		}),
	{ ssr: false }
);

const TaskInformation = styled.div`
	padding: 0 15px;

	border-radius: 5px;
	max-width: 300px;

	background: white;
	margin-top: 0px;
`;

export const TaskCard = ({ item, index }) => {
	console.log(item);

	return (
		<Draggable key={item.id} draggableId={item.id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<TaskInformation>
						<div className="flex flex-col justify-between items-center py-4">
							<div className="flex justify-between items-center gap-2 w-full">
								<div>
									<Image
										className="w-[35px]"
										width={10000}
										height={10000}
										src="/jobcard-svg.svg"
										alt="jobcard-img"
									/>
								</div>
								<div className="w-[100%] text-sm font-semibold justify-self-start">
									<div>
										<h4>{item.Title}</h4>
									</div>
									<div className="flex items-center gap-1 text-[#5A5A5A]">
										<MdOutlineHomeWork />
										<p className="text-[#9E9E9E]">
											Ajmera Infotech Inc.
										</p>
									</div>
								</div>
								<div className="self-start">
									<LuMoreVertical />
								</div>
							</div>
							<div className="self-start flex gap-2 mt-2">
								<div className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7  flex h-[35px] items-center justify-center gap-2 rounded-[4px] px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
									<IoDocumentAttachSharp />
									<p className="text-[12px] mt-[2px]">75%</p>
								</div>
								<div className="text-[#9E9E9E] border border-[#9E9E9E] flex h-[35px] items-center justify-center gap-2  rounded-[50%] border-dashed px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
									<IoDocumentText />
								</div>
								<div className="text-[#9E9E9E] border border-[#9E9E9E] rounded-[50%] flex h-[35px] items-center justify-center gap-2 border-dashed px-[10px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
									<IoChatbubblesOutline />
								</div>
							</div>
						</div>
					</TaskInformation>
				</div>
			)}
		</Draggable>
	);
};

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
