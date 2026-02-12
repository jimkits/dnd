import { useState } from "react";
import "./style.css";

type Monster = {
    name: string;
    description: string;
    stats: {
        ArmorClass: string;
        HitPoints: string;
        Speed: string;
    }[];
    attributes: {
        str: string;
        dex: string;
        con: string;
        int: string;
        wis: string;
        cha: string;
    }[];
};

interface Props {
    monster: Monster;
}

function MonsterDetails({ monster }: Props) {
    const [display, setDisplay] = useState(false);

    const displayMonster = display ? "monster-details-display" : "monster-details-hidden";
    const displayArrow = display ? "arrow down" : "arrow right"

    return (
        <div className={'monster-details'}>
            <h2 data-testid="monster" onClick={() => setDisplay(!display)}>
                {monster.name} <i className={displayArrow} />
            </h2>
            <div className={displayMonster}>
                <h3 data-testid="monster-description" >
                    {monster.description}
                </h3>
                {monster.stats.map((stats) => {
                    return (
                        <div data-testid="monster-stats">
                            <h3> {`AC: ${stats.ArmorClass}`} </h3>
                            <h3> {`Hit Points: ${stats.HitPoints}`} </h3>
                            <h3> {`Speed: ${stats.Speed}`} </h3>
                        </div>
                    )
                })}
                {monster.attributes.map((attributes) => {
                    return (
                        <div data-testid="monster-stats">
                            <h3> {`str: ${attributes.str}`} </h3>
                            <h3> {`dex: ${attributes.dex}`} </h3>
                            <h3> {`con: ${attributes.con}`} </h3>
                            <h3> {`int: ${attributes.int}`} </h3>
                            <h3> {`wis: ${attributes.wis}`} </h3>
                            <h3> {`cha: ${attributes.cha}`} </h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MonsterDetails;