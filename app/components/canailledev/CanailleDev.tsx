import '../canailledev/CanailleDev.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CanailleDev() {
    return(
        <>
        <div className="container-canailleDev">
            <Link className='container-canailleDev__link' href='/'>
            <Image
                className='container-canailleDev__logo'
                src='/CanailleDev/logoCD.webp'
                alt='logo canailledev'
                priority
                width={70}
                height={70}
                loading='eager'
            />
            
            <h2 className="container-canailleDev__h2">Canaille<span className='container-canailleDev__span' >Dev</span></h2>
            </Link>
        </div>     
        
        </>

    )
}