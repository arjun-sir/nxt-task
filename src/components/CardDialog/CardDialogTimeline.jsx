import React from "react";

export const CardDialogTimeline = () => {
	return (
		<div className="bg-[#F9F8F8] h-full text-xs p-4 overflow-y-hidden">
			<h3 className="font-semibold mb-4">Time Line</h3>
			<div className="space-y-4">
				<div className="border-l-2 border-dashed  border-[#57A4F2] pl-4 relative">
					<div>
						<div className="w-[20px] h-[20px] rounded-[50%] bg-[#57A4F2] absolute left-[-10px] top-[0px]"></div>
						<div className="mb-2 text-[#9E9E9E]">Today, 1:12PM</div>
					</div>
					<div className="bg-[#E4F2FF] p-2 rounded-sm">
						<h4 className="font-semibold mb-2">Moved to Saved</h4>
						<p>You moved this job from Applied to saved</p>
					</div>
				</div>
				<div className="border-l-2 border-dashed border-[#57A4F2] pl-4 relative">
					<div>
						<div className="w-[20px] h-[20px] rounded-[50%] bg-[#57A4F2] absolute left-[-10px] top-[0px]"></div>
						<div className="mb-2 text-[#9E9E9E]">Today, 1:12PM</div>
					</div>
					<div className="bg-[#E4F2FF] p-2 rounded-sm">
						<h4 className="font-semibold mb-2">Moved to Saved</h4>
						<p>You moved this job from Applied to saved</p>
					</div>
				</div>
				<div className=" pl-4 relative">
					<div>
						<div className="w-[20px] h-[20px] rounded-[50%] bg-[#57A4F2] absolute left-[-10px] top-[0px]"></div>
						<div className="mb-2 text-[#9E9E9E]">Today, 1:12PM</div>
					</div>
					<div className="bg-[#E4F2FF] p-2 rounded-sm">
						<h4 className="font-semibold mb-2">Moved to Saved</h4>
						<p>You moved this job from Applied to saved</p>
					</div>
				</div>
			</div>
		</div>
	);
};
