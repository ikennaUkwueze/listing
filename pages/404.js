import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooops....</h1>
            <h1>The page you are looking for cannot be found</h1>
            <p>Go back to <Link href="/"><a>Home Page</a></Link> </p>
        </div>
     );
}
 
export default NotFound;