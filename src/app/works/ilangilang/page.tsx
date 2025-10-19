import PageHeader from "@/components/PageHeader";

export default function Page() {
    const details = [
        {
            title: "Role",
            value: "Full Stack Developer, UI/UX Designer",
        },
        {
            title: "Duration",
            value: "March 2025 - Present",
        },
        {
            title: "Team",
            value: "Freelance Project",
        },
        {
            title: "Tech Stack",
            value: "TypeScript, Next.js, TailwindCSS, Contentful (REST API)",
        },
    ]
    return (
        <>
            <PageHeader title="Ilang-Ilang Restaurant" details={details} />
            {/* SUMMARY */}
            <div className="w-full max-w-7xl mx-auto p-10 sm:px-20 space-y-4">
                <h2 className="font-bold text-xl">Summary</h2>
                <p className="text-lg">
                    Developed and launched a responsive website for a family-owned restaurant in Binondo.
                    The site features over 130 menu items and different menu types managed through a headless CMS,
                    with a focus on scalability and ease of content updates.
                </p>

                <h2 className="font-bold text-xl">Highlights</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>Built reusable components and mobile-first layouts using Next.js and TailwindCSS.</li>
                    <li>Integrated Contentful&apos;s REST API for dynamic content management.</li>
                    <li>Deployed the live site via Vercel and continue to add new pages/features.</li>
                </ul>
            </div>
        </>
    );
}