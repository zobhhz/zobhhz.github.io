import { Card, CardExternal, CardInternal } from "@/components/Card";
import works from "@/data/works.json";

export default function Works() {
    return (
        <div className="flex flex-col items-center justify-center p-8 sm:p-20 space-y-20">
            {/* Projects */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center w-full">
                <h1 className="font-bold text-2xl lg:text-4xl">Projects</h1>
                <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 w-full">
                    {works.internalProjects.map((proj) => (
                        <CardInternal
                            key={proj.id}
                            title={proj.name}
                            subtitle={proj.role}
                            img={proj.img}
                            url={proj.url}
                        />
                    ))}
                    {works.externalProjects.map((proj) => (
                        <CardExternal
                            key={proj.id}
                            title={proj.name}
                            subtitle={proj.role}
                            img={proj.img}
                            url={proj.url}
                        />
                    ))}

                </ul>
            </div>
            {/* Publications */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center w-full">
                <h1 className="font-bold text-2xl lg:text-4xl">Publications</h1>
                <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    {works.publications.map((pub) => (
                        <CardExternal
                            key={pub.id}
                            title={pub.title}
                            subtitle={`${pub.conf} • ${pub.role}`}
                            img={pub.img}
                            url={pub.url}
                        />
                    ))}
                </ul>
            </div>
            {/* Playgroud */}
            <div className="flex flex-col gap-4 lg:gap-8 items-center w-full">
                <h1 className="font-bold text-2xl lg:text-4xl">Playground</h1>
                <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    <Card
                        title={"Parking Lot Management System"}
                        subtitle={"Web app for tracking vehicle entries/exits, fee calculation, and continuous parking management."}
                        img={""}
                        url={"/works/parking-system"}
                    />
                </ul>
            </div>
        </div>
    );
}