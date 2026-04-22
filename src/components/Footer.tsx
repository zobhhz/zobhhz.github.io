import Image from "next/image";

function SocialIcon({ href, icon, label }: { href: string; icon: string; label: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Image aria-hidden src={icon} alt={`${label} icon`} width={24} height={24} className="invert block" />
        </a>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socials = [
        {
            label: "Email",
            href: "mailto:alyssajayepalmares@gmail.com",
            icon: "/email.svg",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/alyssapalmares/",
            icon: "/linkedin.svg",
        },
        {
            label: "Github",
            href: "https://github.com/zobhhz",
            icon: "/github.svg",
        },
    ];
    return (
        <footer className="flex flex-col lg:flex-row justify-between items-center px-4 py-6 pb-16 md:pb-6 gap-4 md:gap-0 text-lg lg:text-base">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <p>Connect with me!</p>
                <nav>
                    {/* DESKTOP */}
                    <ul className="hidden md:flex md:flex-row md:space-x-6 underline underline-offset-4">
                        {socials.map(({ label, href, icon }) => (
                            <li key={label}>
                                <a
                                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-coral-400"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image aria-hidden src={icon} alt={`${label} icon`} width={16} height={16} />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE */}
                    <ul className="md:hidden flex flex-row space-x-2">
                        {socials.map(({ label, href, icon }) => (
                            <li key={label} className="rounded-full w-12 h-12 bg-smokeyblack flex items-center justify-center">
                                <SocialIcon href={href} icon={icon} label={label} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <p className="text-center text-gray-500">
                © {currentYear} Alyssa Palmares. <br className="md:hidden" />
                Hand-coded with Next.js, TypeScript, <br className="md:hidden" />and lots of matcha 🍵</p>
        </footer>
    );
}