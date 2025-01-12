import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4">
            <h1>
                <Link href="/" id="title-name" className="font-bold">Alyssa Palmares</Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="hover:underline"><Link href="/educ">Education</Link></li>
                    <li className="hover:underline"><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}