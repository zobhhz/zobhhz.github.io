import Image from "next/image";

export default function Footer() {
    return(
        <footer className="flex flex-col md:flex-row justify-between items-center py-16 md:py-6 gap-4 md:gap-0">
            <nav>
                <ul className="flex flex-col md:flex-row space-x-6">
                    <li className="font-bold">Connect with me!</li>
                    <li>
                        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                        href="mailto:alyssajayepalmares@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                aria-hidden
                                src="/email.svg"
                                alt="Email icon"
                                width={16}
                                height={16}
                            />
                            Email
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                        href="https://www.linkedin.com/in/alyssapalmares/" target="_blank" rel="noopener noreferrer">
                            <Image
                                aria-hidden
                                src="/linkedin.svg"
                                alt="LinkedIn icon"
                                width={16}
                                height={16}
                            />
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                        href="https://github.com/zobhhz" target="_blank" rel="noopener noreferrer">
                            <Image
                                aria-hidden
                                src="/github.svg"
                                alt="Github icon"
                                width={16}
                                height={16}
                            />
                            Github
                        </a>
                    </li>
                </ul>
            </nav>
            <h1 className="text-center">© 2025 Alyssa Palmares. Made with 🍵</h1>
        </footer>
    );
}