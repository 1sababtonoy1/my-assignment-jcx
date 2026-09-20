import React from 'react';
import type { Itechnolgies } from '../../types.tsx/technology';
import { Bounce, toast } from 'react-toastify';

const TechnoCard = ({
    techno,
    selectedTechs,
    setSelectedTechs
}: {
    techno: Itechnolgies;
    selectedTechs: Itechnolgies[];
    setSelectedTechs: React.Dispatch<React.SetStateAction<Itechnolgies[]>
    >;
}) => {

    // Check if this technology is already selected
    const isSelected =
        selectedTechs.findIndex(
            (tech) => tech.id === techno.id
        ) !== -1;

    const handleAdd = () => {
        if (isSelected) {
            return;
        }
        setSelectedTechs([
            ...selectedTechs,
            techno
        ]);

        toast.success('Added to Stack', {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    };


    return (
        <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >

            {/* Top section */}
            <div className="flex items-start justify-between">

                {/* Icon */}
                <img
                    src={techno.icon}
                    alt={techno.name}
                    className="h-9 w-9 object-contain"
                />

                {/* Badge */}
                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
                    Popular
                </span>

            </div>


            {/* Title + Description */}
            <div className="mt-5">

                <h2 className="text-xl font-bold text-slate-900">
                    {techno.name}
                </h2>

                <p className="mt-2 min-h-[72px] text-sm leading-5 text-slate-500">
                    {techno.description}
                </p>

            </div>


            {/* Divider */}
            <div className="my-4 border-t border-slate-100"></div>


            {/* Info */}
            <div className="flex items-center justify-between text-xs">

                {/* Category */}
                <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-600">
                    {techno.category}
                </span>

                {/* Level */}
                <span className="text-slate-500">
                    Beginner-Friendly
                </span>

                {/* Rating */}
                <span className="flex items-center gap-1 text-slate-700">
                    <span className="text-yellow-400">
                        ★
                    </span>

                    {techno.rating}
                </span>

            </div>


            {/* Button */}
            <button
                onClick={handleAdd}
                disabled={isSelected}
                className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition ${
                    isSelected
                        ? "cursor-not-allowed bg-gray-400"
                        : "cursor-pointer bg-slate-950 hover:bg-slate-800"
                }`}
            >
                {
                isSelected? "Added to Stack": "Add to Stack"
                }
            </button>

        </div>
    );
};

export default TechnoCard;