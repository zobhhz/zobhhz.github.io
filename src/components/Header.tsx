import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-6 text-lg lg:text-base">
            <h1>
                <Link href="/" id="title-name" className="font-bold hover:text-coral">Alyssa Palmares</Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="underline underline-offset-4 decoration-coral hover:underline hover:underline-offset-4 hover:text-coral"><Link href="/works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}