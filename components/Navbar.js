import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/post"><a>post</a></Link>
                <Link href="/portfolio"><a>portfolio</a></Link>
            </nav>
        </>
    )
}