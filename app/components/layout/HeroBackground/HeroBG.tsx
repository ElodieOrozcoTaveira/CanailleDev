import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import '../HeroBackground/HeroBG.scss';


export default function HeroBG() {
    return(
        <div className='hero-background'>
            <Header/>
            <Hero/>
        </div>
    )
}