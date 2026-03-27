import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./style.css";
import { GetMonsterDetails, MonstersDetails } from "./get-monsters";
import MonsterDetails from "./monster-details";

function Monster() {
    const location = useLocation();
    const monsterSize = location.state.name;
    const [monsters, setMonsters] = useState<MonstersDetails[]>([]);

    useEffect(() => {
        GetMonsterDetails(monsterSize).then(setMonsters);
    }, [monsterSize]);

    return (
        <div className="monster-list">
            <h1>{`${monsterSize} Monsters`}</h1>
            {monsters.map((monster) => (
                <MonsterDetails key={monster.name} monster={monster} />
            ))}
        </div>
    );
}

export default Monster;