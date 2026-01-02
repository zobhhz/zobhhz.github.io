import PageHeader from "@/components/PageHeader";

export default function Page() {
    const details = [
        {
            title: "Frontend",
            value: "TypeScript, Next.js, TailwindCSS, shadcn/ui, Vercel",
        },
        {
            title: "Logic/Backend",
            value: "Custom parking system class (object-oriented approach)",
        },
        {
            title: "Hosting",
            value: "Vercel",
        },
    ]
    return (
        <>
            <PageHeader title="Parking Lot Management System" details={details} />
            {/* SUMMARY */}
            <div className="w-full max-w-7xl mx-auto p-10 sm:px-20 space-y-4">
                <h2 className="font-bold text-xl">Summary</h2>
                <p className="text-lg leading-snug lg:leading-normal">
                    This project is a web-based parking management system built with Next.js (React-based) and TypeScript. It assigns parking slots
                    based on vehicle size and entry point, tracks entries and exits, and calculates parking fees following business rules.
                    I also explored the shadcn/ui component library for the first time to build a clean, reusable interface.
                </p>
                <p className="text-lg leading-snug lg:leading-normal">
                    Working on this project made me realize the importance of good state management. It also encouraged me
                    to explore state management libraries such as Zustand to handle more complex use cases in the future.
                </p>

                <h2 className="font-bold text-xl">Key Features</h2>
                <ul className="list-disc list-inside text-lg leading-snug lg:leading-normal">
                    <li>Slot assignment based on entry point distance and vehicle size compatibility</li>
                    <li>Real-time validation for vehicle plate numbers and parking availability</li>
                    <li>Parking fee computation with hourly, daily, and continuous parking session rules</li>
                    <li>Manual and automatic time inputs for testing different scenarios</li>
                    <li>Simple UI with clear feedback messages</li>
                </ul>
            </div>
        </>
    );
}