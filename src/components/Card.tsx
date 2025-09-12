import Image from "next/image";
import Link from "next/link";

type CardData = {
    title: string,
    subtitle: string,
    url: string,
    img: string
}

export function CardExternal(data: Readonly<CardData>) {
    return (
        <a href={data.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full w-full sm:w-96 min-h-[15rem] overflow-hidden border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline transition-all duration-150">
            <div className="relative w-full aspect-video">
                <Image
                    src={data.img}
                    alt={data.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                    priority
                />
            </div>
            <div className="flex flex-col flex-grow p-4 border-t border-gray-300">
                <h1 className="align-right text-smokeyblack">{data.title}</h1>
                <h2 className="italic text-gray-500">{data.subtitle}</h2>
            </div>
        </a>
    );
}

export function CardInternal(data: Readonly<CardData>) {
    return (
        <Link href={data.url} className="flex flex-col h-full w-full sm:w-96 min-h-[15rem] overflow-hidden border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline transition-all duration-150">
            <div className="relative w-full aspect-video">
                <Image
                    src={data.img}
                    alt={data.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                />
            </div>
            <div className="flex flex-col flex-grow p-4 border-t border-gray-300">
                <h1 className="align-right text-smokeyblack">{data.title}</h1>
                <h2 className="italic text-gray-500">{data.subtitle}</h2>
            </div>
        </Link>
    );
}

export function Card(data: Readonly<CardData>) {
    return (
        <Link href={data.url} className="flex flex-col h-full w-full sm:w-96 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-whitesmoke hover:no-underline transition-all duration-150">
            <div className="flex flex-col flex-grow p-4 border-gray-300">
                <h1 className="align-right text-smokeyblack">{data.title}</h1>
                <h2 className="italic text-gray-500">{data.subtitle}</h2>
            </div>
        </Link>
    );
}