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

    const displayMonster = display ? "monster-display" : "monster-hidden";
    const displayMonsterDetails = display ? "monster-details-display" : "monster-details-hidden";
    const displayArrow = display ? "arrow down" : "arrow right"

    return (
        <div key={monster.name} className={displayMonster}>
            <h2 data-testid="monster-name" onClick={() => setDisplay(!display)}>
                {monster.name} <i className={displayArrow} />
            </h2>
            <div className={displayMonsterDetails}>
                <h3 data-testid="monster-description" className="monster-description">
                    {monster.description}
                </h3>
                <div className="monster-details">
                    {monster.stats.map((stats) => {
                        return (
                            <div data-testid="monster-stats" className="monster-stats">
                                <div className="stat-row"><span className="stat-label">AC</span><span className="stat-value">{stats.ArmorClass}</span></div>
                                <div className="stat-row"><span className="stat-label">HP</span><span className="stat-value">{stats.HitPoints}</span></div>
                                <div className="stat-row"><span className="stat-label">SPEED</span><span className="stat-value">{stats.Speed}</span></div>
                            </div>
                        )
                    })}
                    {monster.attributes.map((attributes) => {
                        return (
                            <>
                                <div data-testid="monster-abilities" className="monster-abilities">
                                    <div className="ability-score"><span className="ability-label">STR</span><span className="ability-value">{attributes.str}</span></div>
                                    <div className="ability-score"><span className="ability-label">DEX</span><span className="ability-value">{attributes.dex}</span></div>
                                    <div className="ability-score"><span className="ability-label">CON</span><span className="ability-value">{attributes.con}</span></div>
                                </div>
                                <div data-testid="monster-abilities" className="monster-abilities">
                                    <div className="ability-score"><span className="ability-label">INT</span><span className="ability-value">{attributes.int}</span></div>
                                    <div className="ability-score"><span className="ability-label">WIS</span><span className="ability-value">{attributes.wis}</span></div>
                                    <div className="ability-score"><span className="ability-label">CHA</span><span className="ability-value">{attributes.cha}</span></div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MonsterDetails;