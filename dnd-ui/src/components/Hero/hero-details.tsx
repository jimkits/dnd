import { AllHeroDetails } from './get-all-heroes';
import '../../typography.css'

interface Props {
    hero: AllHeroDetails;
    index: number;
}

function HeroDetails({ hero, index }: Props) {
    return (
        <>
            {index !== 0 && <div className='hero-list-divider'>✦</div>}
            <h1 className='hero-name'>{hero.name}</h1>
            <div className='hero-book'>
                <span className='hero-trait-label'>Book</span>
                <span className='hero-trait-value'>{hero.book}</span>
            </div>
            <div className='hero-information' style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <div className='hero-text'>
                    <p className='hero-description' style={{ whiteSpace: 'pre-line' }}>{hero.description}</p>
                    <div className='hero-core-traits'>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Primary Ability</span>
                            <span className='hero-trait-value'>{hero.core_traits.primary_ability}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Weapon Proficiencies</span>
                            <span className='hero-trait-value'>{hero.core_traits.weapon_proficiencies}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Saving Throw Proficiencies</span>
                            <span className='hero-trait-value'>{hero.core_traits.saving_throw_proficiencies}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Armor Training</span>
                            <span className='hero-trait-value'>{hero.core_traits.armor_training}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Hit Point Die</span>
                            <span className='hero-trait-value'>{hero.core_traits.hit_point_die}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Tool Proficiencies</span>
                            <span className='hero-trait-value'>{hero.core_traits.tool_proficiencies}</span>
                        </div>
                        <div className='hero-traits-row hero-trait-full'>
                            <span className='hero-trait-label'>Skill Proficiencies</span>
                            <span className='hero-trait-value'>{hero.core_traits.skill_proficiencies}</span>
                        </div>
                    </div>
                    <div className='hero-core-traits hero-equipment-grid'>
                        <div className='hero-equipment-header'>Starting Equipment</div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Option A</span>
                            <span className='hero-trait-value'>{hero.core_traits.starting_equipment.option_a}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Option B</span>
                            <span className='hero-trait-value'>{hero.core_traits.starting_equipment.option_b}</span>
                        </div>
                        <div className='hero-traits-row'>
                            <span className='hero-trait-label'>Option C</span>
                            <span className='hero-trait-value'>{hero.core_traits.starting_equipment.option_c}</span>
                        </div>
                    </div>
                </div>
                <img className='hero-image' src={hero.image.startsWith('/') ? hero.image : `data:image/png;base64,${hero.image}`} alt='hero-image' />
            </div>
        </>
    );
}

export default HeroDetails;