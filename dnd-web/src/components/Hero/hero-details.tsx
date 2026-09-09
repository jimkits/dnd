import config from "../../config";
import { AllHeroDetails, CoreTraits, StartingEquipment } from './get-all-heroes';
import '../../typography.css'

interface Props {
    hero: AllHeroDetails;
    index: number;
}

function hasAnyTrait(coreTraits?: CoreTraits): coreTraits is CoreTraits {
    if (!coreTraits) return false;
    return !!(coreTraits.primaryAbility || coreTraits.savingThrowProficiencies || coreTraits.hitPointDie
        || coreTraits.weaponProficiencies || coreTraits.armorTraining || coreTraits.toolProficiencies
        || coreTraits.skillProficiencies);
}

function hasAnyEquipment(startingEquipment?: StartingEquipment): startingEquipment is StartingEquipment {
    if (!startingEquipment) return false;
    return !!(startingEquipment.optionA || startingEquipment.optionB || startingEquipment.optionC);
}

function HeroDetails({ hero, index }: Props) {
    const coreTraits = hero.coreTraits;
    const startingEquipment = coreTraits?.startingEquipment;

    return (
        <>
            {index !== 0 && <div className='list-divider wide'>✦</div>}
            <div className='hero'>
                <img
                    className='image'
                    style={{ float: index % 2 === 0 ? 'right' : 'left' }}
                    src={`${config.REACT_APP_API_BASE_URL}/api/compendium/heroes/${encodeURIComponent(hero.name)}/portrait`}
                    alt={`${hero.name} portrait`}
                />
                <div className='details'>
                    <span className='name'>{hero.name}</span>
                    <div className='trait'>
                        <span className='label'>Book</span>
                        <span className='value'>{hero.book}</span>
                    </div>
                    {hasAnyTrait(coreTraits) && (
                        <>
                            <hr className='divider' />
                            <div className='trait'>
                                <span className='label-heading'>Core Traits</span>
                            </div>
                            {coreTraits.primaryAbility && (
                                <div className='trait'>
                                    <span className='label'>Primary Ability</span>
                                    <span className='value'>{coreTraits.primaryAbility}</span>
                                </div>
                            )}
                            {coreTraits.savingThrowProficiencies && (
                                <div className='trait'>
                                    <span className='label'>Saving Throw Proficiencies</span>
                                    <span className='value'>{coreTraits.savingThrowProficiencies}</span>
                                </div>
                            )}
                            {coreTraits.hitPointDie && (
                                <div className='trait'>
                                    <span className='label'>Hit Point Die</span>
                                    <span className='value'>{coreTraits.hitPointDie}</span>
                                </div>
                            )}
                            {coreTraits.weaponProficiencies && (
                                <div className='trait'>
                                    <span className='label'>Weapon Proficiencies</span>
                                    <span className='value'>{coreTraits.weaponProficiencies}</span>
                                </div>
                            )}
                            {coreTraits.armorTraining && (
                                <div className='trait'>
                                    <span className='label'>Armor Training</span>
                                    <span className='value'>{coreTraits.armorTraining}</span>
                                </div>
                            )}
                            {coreTraits.toolProficiencies && (
                                <div className='trait'>
                                    <span className='label'>Tool Proficiencies</span>
                                    <span className='value'>{coreTraits.toolProficiencies}</span>
                                </div>
                            )}
                            {coreTraits.skillProficiencies && (
                                <div className='trait'>
                                    <span className='label'>Skill Proficiencies</span>
                                    <span className='value'>{coreTraits.skillProficiencies}</span>
                                </div>
                            )}
                        </>
                    )}
                    {hasAnyEquipment(startingEquipment) && (
                        <>
                            <hr className='divider' />
                            <div className='trait'>
                                <span className='label-heading'>Starting Equipment</span>
                            </div>
                            {startingEquipment.optionA && (
                                <div className='trait'>
                                    <span className='label'>Option A</span>
                                    <span className='value'>{startingEquipment.optionA}</span>
                                </div>
                            )}
                            {startingEquipment.optionB && (
                                <div className='trait'>
                                    <span className='label'>Option B</span>
                                    <span className='value'>{startingEquipment.optionB}</span>
                                </div>
                            )}
                            {startingEquipment.optionC && (
                                <div className='trait'>
                                    <span className='label'>Option C</span>
                                    <span className='value'>{startingEquipment.optionC}</span>
                                </div>
                            )}
                        </>
                    )}
                    <hr className='divider' />
                    <span className='description' style={{ whiteSpace: 'pre-line' }}>{hero.description}</span>
                </div>
            </div>
        </>
    );
}

export default HeroDetails;
