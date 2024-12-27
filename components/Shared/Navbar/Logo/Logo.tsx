import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" legacyBehavior>
            <a className='cursor-pointer transform hover:rotate-180 transition-transform duration-300'>
                <Image 
                    src="/Logo.png" 
                    alt="Logo" 
                    width={50} 
                    height={50} 
                />
            </a>
        </Link>
    );
}
