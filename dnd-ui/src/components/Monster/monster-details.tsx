import { useState } from "react";
import "./style.css";
import { MonstersDetails } from "./get-monsters";

interface Props {
    monster: MonstersDetails;
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
                    <div data-testid="monster-stats" className="monster-stats">
                        <div className="stat-row">
                            <span className="stat-label">AC</span>
                            <span className="stat-value">{monster.stats.armorClass}</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">HP</span>
                            <span className="stat-value">{monster.stats.hitPoints}</span>
                        </div>
                        <div className="stat-row">
                            <span className="stat-label">SPEED</span>
                            <span className="stat-value">{monster.stats.speed}</span>
                        </div>
                    </div>
                    <div data-testid="monster-attributes" className="monster-attributes">
                        <div className="ability-score">
                            <span className="ability-label">STR</span>
                            <span className="ability-value">{monster.attributes.strenth}</span>
                        </div>
                        <div className="ability-score">
                            <span className="ability-label">DEX</span>
                            <span className="ability-value">{monster.attributes.dexterity}</span>
                        </div>
                        <div className="ability-score">
                            <span className="ability-label">CON</span>
                            <span className="ability-value">{monster.attributes.constitution}</span>
                        </div>
                    </div>
                    <div data-testid="monster-attributes" className="monster-attributes">
                        <div className="ability-score">
                            <span className="ability-label">INT</span>
                            <span className="ability-value">{monster.attributes.intelligence}</span>
                        </div>
                        <div className="ability-score">
                            <span className="ability-label">WIS</span>
                            <span className="ability-value">{monster.attributes.wisdom}</span>
                        </div>
                        <div className="ability-score">
                            <span className="ability-label">CHA</span>
                            <span className="ability-value">{monster.attributes.charisma}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonsterDetails;