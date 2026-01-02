import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-6 text-lg lg:text-base">
            <h1>
                <Link href="/" id="title-name" title="Alyssa Palmares (✿◡‿◡)" className="font-bold hover:no-underline">
                    <Image
                        src={"/logo.svg"}
                        alt="Alyssa Palmares"
                        width={130}
                        height={28}
                    />
                </Link>
            </h1>
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="underline underline-offset-4 decoration-coral hover:text-coral"><Link href="/works" title="Works">Works</Link></li>
                </ul>
            </nav>
        </header>
    );
}