import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/logo.png" alt="Logo" width={36} height={46}></Image>
            </div>
            
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/items">
                <a>Listing</a>
            </Link>
        </nav>
     );
}
 
export default Navbar;