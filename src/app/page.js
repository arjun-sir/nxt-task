import Image from "next/image";
import { Navbar } from "../components/Navbar/Navbar.jsx";

export default function Home() {
	return (
		<div className="bg-gray-400 h-[100vh]">
			<Navbar />
		</div>
	);
}
