import React from 'react';
import type { Itechnolgies } from '../../types.tsx/technology';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

const SelectedTechs = ({
    selectedTechs,
    setSelectedTechs,
}: {
    selectedTechs: Itechnolgies[];
    setSelectedTechs: React.Dispatch<
        React.SetStateAction<Itechnolgies[]>
    >;
}) => {

    // Remove one technology
    const handleRemove = (technoId: string) => {
        const updatedTechs = selectedTechs.filter(
            (techno) => techno.id !== technoId
        );
        toast.warn('Tech Removed', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
        setSelectedTechs(updatedTechs);
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setSelectedTechs([]);
        toast.warn('Stack Cleared', {
position: "top-right",
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

    // If no technologies are selected
    if (selectedTechs.length === 0) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <h2 className="text-xl font-bold text-slate-900">
                    Your Stack
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    No technologies selected yet.
                </p>

                <div className="mt-4 flex h-[60px] items-center justify-center rounded-xl border-2 border-dashed border-slate-200">
                    <p className="text-sm text-slate-400">
                        Your stack is empty.
                    </p>
                </div>

            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            {/* Header */}
            <h2 className="text-xl font-bold text-slate-900">
                Your Stack
            </h2>

            <p className="mt-2 text-sm text-slate-400">
                {selectedTechs.length} Technology
                {selectedTechs.length !== 1 ? 's' : ''} Selected
            </p>

            {/* Selected technologies */}
            <div className="mt-5 space-y-2">

                {selectedTechs.map((techno: Itechnolgies) => (
                    <div
                        key={techno.id}
                        className="flex items-center justify-between rounded-xl border-2 border-slate-200 px-4 py-3"
                    >

                        {/* Icon + information */}
                        <div className="flex items-center gap-3">

                            <img
                                src={techno.icon}
                                alt={techno.name}
                                className="h-9 w-9 object-contain"
                            />

                            <div>
                                <h2 className="text-base font-bold text-slate-900">
                                    {techno.name}
                                </h2>

                                <p className="text-xs font-medium text-slate-400">
                                    {techno.category}
                                </p>
                            </div>

                        </div>

                        {/* Remove individual technology */}
                        <button
                            onClick={() => handleRemove(techno.id)}
                            className="cursor-pointer text-3xl text-slate-400 transition hover:text-red-500"
                        >
                            <RxCross2 />
                        </button>

                    </div>
                ))}

            </div>

            {/* Remove All button */}
            <button
                onClick={handleRemoveAll}
                className="mt-8 w-full rounded-xl border border-red-400 py-3 text-xl font-semibold text-red-500 transition hover:bg-red-50"
            >
                Remove All
            </button>

        </div>
    );
};

export default SelectedTechs;