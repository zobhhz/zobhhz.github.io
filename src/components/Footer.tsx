import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row justify-between items-center p-6 pb-16 md:pb-6 gap-4 md:gap-0 text-lg lg:text-base">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <p className="font-semibold">Connect with me!</p>
                <nav>
                    {/* DESKTOP */}
                    <ul className="hidden md:flex flex-col md:flex-row justify-center md:space-x-6 underline underline-offset-4">
                        <li>
                            <a className="flex items-center gap-2"
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
                            <a className="flex items-center gap-2"
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
                            <a className="flex items-center gap-2"
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

                    {/* MOBILE */}
                    <ul className="md:hidden flex flex-row space-x-2">
                        <li className="rounded-full w-12 h-12 bg-smokeyblack flex items-center justify-center">
                            <a href="mailto:alyssajayepalmares@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    aria-hidden
                                    src="/email.svg"
                                    alt="Email icon"
                                    width={24}
                                    height={24}
                                    className="invert block"
                                />
                            </a>
                        </li>
                        <li className="rounded-full w-12 h-12 bg-smokeyblack flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/alyssapalmares/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    aria-hidden
                                    src="/linkedin.svg"
                                    alt="Linkedin icon"
                                    width={24}
                                    height={24}
                                    className="invert block"
                                />
                            </a>
                        </li>
                        <li className="rounded-full w-12 h-12 bg-smokeyblack flex items-center justify-center">
                            <a className="text-center" href="https://github.com/zobhhz" target="_blank" rel="noopener noreferrer">
                                <Image
                                    aria-hidden
                                    src="/github.svg"
                                    alt="Github icon"
                                    width={24}
                                    height={24}
                                    className="invert"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <p className="text-center text-gray-500">
                © 2025 Alyssa Palmares. <br className="md:hidden" />
                Made with Next.js, TypeScript, <br className="md:hidden" />and lots of matcha 🍵</p>
        </footer>
    );
}