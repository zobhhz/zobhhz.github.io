import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Page() {
    const details = [
        {
            title: "Role",
            value: "UI/UX Design Intern",
        },
        {
            title: "Duration",
            value: "September 2023 - January 2024",
        },
        {
            title: "Team",
            value: "6 design interns, 1 supervisor",
        },
        {
            title: "Tools/Skills",
            value: "Figma, UI Design, Prototyping, Design Auditing",
        },
    ]
    return (
        <>
            <PageHeader title="Pixel8 Web Consultancy & Solutions Inc." details={details} />
            <div className="w-full max-w-7xl mx-auto p-10 sm:p-20 space-y-10 md:space-y-20">
                {/* SUMMARY */}
                <div className="space-y-4">
                    <h2 className="font-bold text-xl">Summary</h2>
                    <p className="text-lg leading-snug lg:leading-normal">
                        I was part of a team of design interns focused on creating UI designs based on user flows provided by business analysts.
                        Our work covered both mobile and desktop interfaces across three main projects:
                    </p>
                    <ul className="list-disc list-inside text-lg leading-snug lg:leading-normal">
                        <li>A Human Resource Management Information System (HRMIS) focused on payroll features</li>
                        <li>A Project Scope Management System</li>
                        <li>A Retail Inventory System</li>
                    </ul>
                    <p className="text-lg leading-snug lg:leading-normal">
                        This internship was my first experience working with an established design system, which included following brand
                        guidelines, a defined color palette, and applying an 8-point pixel grid for layout consistency. It taught me how to
                        design within constraints while still solving user needs and maintaining usability across different screen sizes.
                    </p>
                    <p className="text-lg leading-snug lg:leading-normal">
                        Below are selected screenshots of my design contributions across the three projects I worked on during my internship.
                    </p>
                </div>
                {/* HRMIS */}
                <div className="space-y-4 w-full">
                    <h2 className="font-bold text-xl text-center">HRMIS Payroll System 💻</h2>
                    <h3 className="font-bold pt-4">Feature Highlight: Accessibility & Security Management</h3>
                    <p>Designed a desktop interface for system admins to view, add, update, and delete role permissions.</p>
                    <a
                        href="https://www.figma.com/proto/dLdKa9UZgZJ4nWevNMZYmX/Accessibility-and-Security-%7C-Role-Permissions-%7C-Payroll-Management-System?node-id=25-2132&t=UPkhz16HBSzWY5gD-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A2132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-coral hover:underline">
                        View interactive prototype
                    </a>
                    <div className="place-self-center relative w-full max-w-3xl aspect-video border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-150 overflow-hidden">
                        <Image
                            src={'/images/pixel8/pixel8-hrmis.png'}
                            alt="Desktop UI showing role permissions feature in HRMIS Payroll System"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                {/* PROJECT SCOPE */}
                <div className="space-y-4 w-full">
                    <h2 className="font-bold text-xl text-center">Project Scope Management System 🔍</h2>
                    <h3 className="font-bold pt-4">Task Highlight: UI Design Audit</h3>
                    <p>
                        Audited the &quot;Define Scope&quot; form for project team members. The redesign focused on the
                        &quot;Assumptions and Constraints&quot; section, improving usability and ensuring alignment with the company&apos;s
                        design system.
                    </p>
                    <a
                        href="https://www.figma.com/proto/TrKWtC6dhoeVy9oH0SsJi5/Wireframe-and-Prototype-%7C-Define-Scope-%7C-Project-Scope-Management-System?page-id=309%3A18173&node-id=309-24339&viewport=735%2C-300%2C0.02&t=MeFGGcmf502wsK6F-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=309%3A24339"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-coral hover:underline">
                        View updated prototype
                    </a>
                    <div className="place-self-center relative w-full max-w-3xl aspect-video border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-150 overflow-hidden">
                        <Image
                            src={'/images/pixel8/pixel8-scope.png'}
                            alt="Before and After UI in Assumptions & Constraints section for Project Scope Management System"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                {/* RETAIL */}
                <div className="space-y-4 w-full">
                    <h2 className="font-bold text-xl text-center">Retail Inventory System 💻📱</h2>
                    <h3 className="font-bold pt-4 ">Task Highlight: Cross Platform, Role-Based UI Design</h3>
                    <p>
                        Designed a user flow for receiving inventory from a supplier, where the products have variants but no serial numbers.
                        A mobile interface was created for store clerks, while a desktop one was created specifically for store managers.
                    </p>
                    <a
                        href="https://www.figma.com/proto/llDUwWbVOtD6A6JDAwz0Dq/Receive-from-Supplier-%7C-Receive---Sort-%7C-Clerk-%7C-Retail-Inventory-Management-System?node-id=83-5016&t=uuLVL5CSMuWIdZou-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=83%3A5016&show-proto-sidebar=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-coral hover:underline">
                        View mobile prototype
                    </a>
                    <div className="place-self-center relative w-full max-w-48 aspect-[9/20] border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-150 overflow-hidden">
                        <Image
                            src={'/images/pixel8/pixel8-retail.png'}
                            alt="Mobile UI for store clerk receiving process in Retail Inventory System"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}