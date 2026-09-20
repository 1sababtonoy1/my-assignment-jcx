import { use, useState } from "react";
import type { Itechnolgies } from "../../types.tsx/technology";
import AvailableTechs from "./AvailableTechs";
import SelectedTechs from "./SelectedTechs";
import Footer from "../Footer";
interface TechnoProps{
    technoPromise: Promise<Itechnolgies[]>
}
const Technologies = ({technoPromise}:TechnoProps) => {
    const technologies = use(technoPromise)
    const [selectedTechs, setSelectedTechs] = useState<Itechnolgies[]>([]);
    return (
        <div className="container mx-auto">
            <div className="mb-10">
    <h2 className="text-[48px] leading-[1.1] font-extrabold tracking-[-1.5px] text-[#11182F]">
        Explore the{" "}
        <span className="text-[#D642A6]">
            Technologies
        </span>
    </h2>

    <p className="mt-5 text-[22px] leading-[1.4] font-medium text-[#657693]">
        Pick one technology per category to build your ideal stack.
    </p>
</div>

            <div className="flex gap-5">

    {/* Available Technologies */}
    <div className="flex-1 ">
        <AvailableTechs
            technologies={technologies}
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
        />
    </div>

    {/* Your Stack */}
    <div className="w-[280px] shrink-0">
        <SelectedTechs
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
        />
    </div>

</div>
<div className="mt-16">
    <Footer></Footer>
</div>
</div>
    );
};

export default Technologies;