import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex justify-between items-center py-4">
            <nav>
                <ul className="flex flex-row space-x-6">
                    <li className="font-bold">Connect with me!</li>
                    <li className="hover:underline"><Link href="mailto:alyssajayepalmares@gmail.com">Email</Link></li>
                    <li className="hover:underline"><Link href="https://www.linkedin.com/in/alyssapalmares/">Linkedin</Link></li>
                    <li className="hover:underline"><Link href="https://github.com/zobhhz">Github</Link></li>
                </ul>
            </nav>
            <h1>© 2024 Alyssa Palmares. Made with 🍵</h1>
        </footer>
    );
}