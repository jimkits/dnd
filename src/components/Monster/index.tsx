import { useLocation } from "react-router";
import "./style.css";
import MonsterDetails from "./monster-details";
import MonsterListData from "../../data/MonsterList"

function Monster() {
    const location = useLocation();
    const monsterSize = location.state.name;

    return (
        <div className="monster-list">
            <h1>{`${monsterSize} Monsters`}</h1>
            {MonsterListData.find((item) => item.type === monsterSize)?.list.map((monst) => {
                return (
                    <MonsterDetails monster={monst} />
                )
            })}
        </div>
    );
}

export default Monster;