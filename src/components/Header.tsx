import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4">
            <h1>
                <Link href="/" id="title-name" className="font-bold hover:underline hover:underline-offset-4 hover:text-coral">Alyssa Palmares</Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="hover:underline hover:underline-offset-4"><Link href="/educ">Education</Link></li>
                    <li className="hover:underline hover:underline-offset-4"><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}