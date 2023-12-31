import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchState } from "../actions.js";
import { Navbar } from "../src/components/Navbar/Navbar.jsx";
import { SideToggle } from "../src/components/Home/SideToggle.jsx";
import { SearchBar } from "../src/components/Home/SearchBar.jsx";
import { DnD } from "../src/components/DnD/DnD.jsx";

const Index = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchState());
	}, []);

	return (
		<div>
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
		</div>
	);
};

export default Index;
