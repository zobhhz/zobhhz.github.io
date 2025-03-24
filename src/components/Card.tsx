import Image from "next/image";

type CardData = {
    title: string,
    subtitle: string,
    url: string,
    img: string
}

export default function Card(data: Readonly<CardData>) {
    return (
        <a href={data.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full w-full sm:w-96 min-h-[15rem] overflow-hidden border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline">
            <div className="relative w-full aspect-video">
                <Image
                    src={data.img}
                    alt={data.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col flex-grow p-4 border-t border-gray-300">
                <h1 className="align-right text-smokeyblack">{data.title}</h1>
                <h2 className="italic text-gray-500">{data.subtitle}</h2>
            </div>
        </a>
    );
}