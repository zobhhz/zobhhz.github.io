import works from "@/data/works.json";
export default function Works() {
    return(
        <div className="flex flex-col items-center justify-center p-8 sm:p-20">
            <h1 className="font-bold">Projects</h1>
            <ul className="flex flex-col md:flex-row space-x-6">
                {works.projects.map((project) => (
                    <li className="border-2 p-2 border-white rounded-lg" key={project.id}>
                    <h2>{project.name}</h2>
                    <a className="underline" href={project.url}>Visit</a>
                    </li>
                ))}
            </ul>

            <h1 className="font-bold">Publications</h1>
            <ul>
                {works.publications.map((pub) => (
                    <li key={pub.id}>
                    <h2>{pub.title}</h2>
                    <h2>{pub.conf}</h2>
                    <a className="underline" href={pub.url}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}