import Link from "next/link"

export default function Section({news}) {
    return(
        <Link href={news.url} target="_blank">
            <section className="flex flex-col my-6 p-6 rounded-3xl bg-slate-400 hover:bg-slate-300 items-center">
                <img className="w-1/2 aspect-square object-contain" src={news.image} alt=""/>
                <div className="w-4/5 flex flex-col justify-between">
                    <h3>{news.title}</h3>
                    <div>By {news.author}</div>
                </div>
            </section>
        </Link>
        )
}

