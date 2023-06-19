import Image from "next/image";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { SideToggle } from "@/components/Home/SideToggle.jsx";
import { SearchBar } from "@/components/Home/SearchBar.jsx";
import { DnD } from "@/components/Home/DnD/DnD.jsx";

export default function Home() {
	return (
		<div className="bg-[#F5F5F5] overflow-hidden min-h-[100vh]">
			<Navbar />

			<div className="flex mt-[20px]">
				<div className="w-[20vw] ml-[32px] ">
					<SideToggle />
				</div>
				<div className="mx-[3vw] space-y-4 w-[70vw]">
					<SearchBar />
					<div className="scroll-disable overflow-x-scroll">
						<DnD />
					</div>
				</div>
			</div>
		</div>
	);
}
