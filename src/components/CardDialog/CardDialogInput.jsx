import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CardDialogInput = () => {
	const [value, setValue] = useState(
		"<p><strong>About the Job</strong></p><p><br></p><p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</p><p><br></p><p>As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork – all essential skills for a successful career in this field.</p><p><br></p><p><strong>Responsibilities:</strong></p><p><br></p><ul><li>Assist in the research, design, and prototyping of user interfaces and experiences</li><li>Conduct user research and develop personas, user stories, and user flows</li><li>Create wireframes, mockups, and prototypes to effectively communicate design ideas</li><li>Collaborate with cross-functional teams to gather requirements and develop solutions</li><li>Participate in usability testing and incorporate feedback into design iterations</li><li>Support the team with general administrative tasks as needed</li><li>Contribute to the creation of design documentation and style guides</li></ul><p><br></p><p><strong>Requirements:</strong></p><p><br></p><ul><li>Basic understanding of UI/UX design principles and practices Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</li><li>Excellent written and verbal communication skills in English Ability to work independently and as part of a team</li><li>Strong analytical and problem-solving skills</li><li>Knowledge of web and mobile design best practices is a plus</li><li>Experience with user research methodologies and usability testing is a plus</li></ul><p><br></p>"
	);
	const [edit, setEdit] = useState(false);

	const modules = {
		toolbar: [
			["bold", "italic", "underline"],
			[{ color: [] }],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }, { align: [] }],
			["clean"],
			["link"],
		],
	};

	return (
		<div className="bg-[#F7F3FF] h-full p-4 overflow-y-scroll ">
			<div className="flex justify-between text-[18px] items-center mb-4">
				<div className="font-bold ">Description</div>
				<div onClick={() => setEdit(!edit)} className="text-[#8246FD]">
					{!edit ? (
						<MdEdit size="1.2em" />
					) : (
						<div className="flex gap-2 text-sm">
							<button className=" text-[#57A4F2]   inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
								Cancel
							</button>
							<button className="bg-[#57A4F2] text-white   inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
								Save
							</button>
						</div>
					)}
				</div>
			</div>
			<div className="scroll-disable">
				{edit ? (
					<ReactQuill
						onChange={setValue}
						theme="snow"
						modules={modules}
						defaultValue={value}
					/>
				) : (
					<div
						className=" text-sm"
						dangerouslySetInnerHTML={{ __html: value }}
					></div>
				)}
			</div>
		</div>
	);
};
