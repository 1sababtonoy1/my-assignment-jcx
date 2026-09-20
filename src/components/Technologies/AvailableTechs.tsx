import React from 'react';
import type { Itechnolgies } from '../../types.tsx/technology';
import TechnoCard from './TechnoCard';

const AvailableTechs = ({technologies, selectedTechs, setSelectedTechs}: {technologies: Itechnolgies[], selectedTechs: Itechnolgies[], setSelectedTechs: React.Dispatch<React.SetStateAction<Itechnolgies[]>>}) => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
  {technologies.map((techno: Itechnolgies) => {
    return (
      <TechnoCard key={techno.id} techno={techno} selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} />
    );
  })}
</div>
    );
};

export default AvailableTechs;