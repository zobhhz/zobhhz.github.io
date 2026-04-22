import PageHeader from "@/components/PageHeader";

export default function Page() {
    const details = [
        {
            title: "Role",
            value: "Full-Stack Developer, UI/UX Designer",
        },
        {
            title: "Duration",
            value: "March - October 2025",
        },
        {
            title: "Team",
            value: "Freelance Project (Solo)",
        },
        {
            title: "Tech Stack",
            value: "TypeScript, Next.js, TailwindCSS, Contentful CMS (REST API), Vercel",
        },
    ]

    const links = [{ label: "🔗 View Project", href: "https://ilangilangrestaurant.com/" }]

    const contentSections = [
        { label: "Context", content: "The restaurant had no clear online presence and most customers were finding them on their phones, so the site needed to be mobile-first from the start." },
        { label: "Users & Constraints", content: "Primary users were customers checking menus, hours, and location on mobile. The main constraints were a limited budget, no existing brand system, and a strong need for simplicity both for users and for the owners managing content long-term." },
        { label: "Process", content: "I started with conversations with the owner to understand their goals and frustrations. Based on that, I scoped the site around what mattered most to users: the menu across multiple categories, key information like hours and location, and an events gallery. From there I moved into wireframes, UI design, and implementation, building reusable components and integrating content through the CMS API to keep the architecture maintainable as the menu grew." },
        { label: "Decisions", content: "I prioritized clarity, fast load times, and accessibility over visual complexity. Given the volume of menu items, information architecture was the central design challenge, which was getting 300+ items to feel navigable without overwhelming users. I chose a headless CMS early on so the owners would have full independence from developers for content updates, which mattered more than any individual design decision given their constraints." },
        { label: "Reflection", content: "Since launch I've continued making small improvements such as migrating static content into the CMS, refining layouts, and keeping dependencies updated. It's been more of an ongoing relationship than a clean handoff, which in retrospect reflects how I'd approach similar projects from the start: designing for ongoing iteration rather than a one-time delivery. If I revisited it, I'd rework the desktop hero though, given that most traffic comes from mobile, it's never been the priority." },
    ]
    return (
        <>
            <PageHeader
                title="Ilang-Ilang Restaurant"
                details={details}
                subtitle="Mobile-first website design & development"
                links={links}
            />
            {/* SUMMARY */}
            <div className="w-full max-w-7xl mx-auto text-smokeyblack p-10 sm:px-20">
                <h2 className="font-bold text-xl mb-4">Ilang-Ilang Restaurant: Full-stack Design & Development</h2>
                <p className="text-lg leading-snug lg:leading-normal whitespace-pre-line lg:whitespace-normal">
                    Developed and launched a fully responsive website for a family-owned restaurant in Binondo, helping
                    them showcase their menu and reach more customers online.{'\n\n'} The site features over 300 menu items
                    organized across multiple content types, all managed through a headless CMS for easy updates and
                    scalability.{'\n\n'} Since launch, the website has supported the restaurant&apos;s growth, attracting
                    over 1,000 monthly visitors and making it easier for the owners to update and manage content without
                    technical help.
                </p>
                <div className="border-t border-gray-300 my-10" />
                <div className="flex flex-col gap-10">
                    {contentSections.map(({ label, content }) => (
                        <div key={label} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6">
                            <span className="text-base text-gray-500 uppercase tracking-wide pt-1">
                                {label}
                            </span>
                            <p className="text-base leading-relaxed">
                                {content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}