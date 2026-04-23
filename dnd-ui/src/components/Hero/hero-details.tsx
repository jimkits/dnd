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
            <div className='hero-information' style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <p className='hero-description'>{hero.description}</p>
                <img className='hero-image' src={hero.image.startsWith('/') ? hero.image : `data:image/png;base64,${hero.image}`} alt='hero-image' />
            </div>
        </>
    );
}

export default HeroDetails;