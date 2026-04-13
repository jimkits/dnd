import { useEffect, useState } from "react";
import "./style.css";
import { GetAllMonsterDetails, MonstersDetails } from "./get-all-monsters";
import MonsterDetails from "./monster-details";

function Monster() {
    const [monsters, setMonsters] = useState<MonstersDetails[]>([]);

    useEffect(() => {
        GetAllMonsterDetails().then(setMonsters);
    }, []);

    return (
        <div className="monster-list">
            <h1>Monsters</h1>
            {monsters
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((monster, index) => (
                    <MonsterDetails key={monster.name} monster={monster} index={index} />
                ))}
        </div>
    );
}

export default Monster;