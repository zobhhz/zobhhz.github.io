import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4">
            <h1>
                <Link href="/" id="title-name">Alyssa Palmares</Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="link"><Link href="/educ">Education</Link></li>
                    <li className="link"><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}