import works from "@/data/works.json";
import Image from "next/image";

export default function Works() {
    return(
        <div className="flex flex-col items-center justify-center p-8 sm:p-20 space-y-20">
            {/* Projects */}
            <div className="flex flex-col gap-4 items-center">
                <h1 className="font-bold text-2xl lg:text-4xl">Projects</h1>
                <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    {works.projects.map((project) => (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full w-full md:w-96 min-h-[15rem] overflow-hidden border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline" key={project.id}>
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={project.img}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-grow p-4 border-t border-gray-300">
                                <h2 className="text-smokeyblack">{project.name}</h2>
                                <h2 className="italic text-gray-500">{project.role}</h2>
                                {/* <a className="underline mt-auto" href={project.url} target="_blank" rel="noopener noreferrer">Visit</a> */}
                            </div>
                        </a>
                    ))}
                </ul>
            </div>
            {/* Publications */}
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-2xl lg:text-4xl">Publications</h1>
                <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
                    {works.publications.map((pub) => (
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full w-full md:w-96 min-h-[15rem] overflow-hidden border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline" key={pub.id}>
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={pub.img}
                                    alt={pub.conf}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-grow p-4 border-t border-gray-300">
                                <h1 className="align-right text-smokeyblack">{pub.title}</h1>
                                <h2 className="italic text-gray-500">{pub.conf} • {pub.role}</h2>
                            </div>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}