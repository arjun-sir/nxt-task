import Image from "next/image";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { SideToggle } from "@/components/Home/SideToggle.jsx";

export default function Home() {
	return (
		<div className="bg-gray-400 h-[100vh]">
			<Navbar />

			<div className="mt-[200px]">
				<SideToggle />
			</div>
		</div>
	);
}
