import { getPosts } from "@/lib/sanity-utils";
import Link from "next/link";
import Image from "next/image";

export default async function Posts() {
    const posts = await getPosts()

    const dateOptions: any = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }

    return(
        <div className="grid grid-cols-3 gap-2 p-2 items-center my-4">
            {posts.map((_post : any) => (
                <Link href={`/posts/${_post.slug}`} key={_post._id} className="border-2 border-slate-500 rounded-lg p-2 hover:scale-105 hover:border-blue-400 transition w-5/6  mx-auto shadow-lg hover:shadow-blue-200">
                    {_post.image && (
                            <Image
                                src={_post.image}
                                alt={_post.title}
                                width={400}
                                height={200}
                                className="object-contain rounded-lg border border-gray-500 mx-auto  h-[10rem]"
                            />
                    )}
                    <div>
                        <h2 className="p-1 font-semibold">{_post.title}</h2>
                        <h3 className="px-1">By<span className="px-1.5">{_post.author.name}</span></h3>
                        <p className="text-sm px-0.5 text-gray-500">Published { new Date(_post.publishedAt).toLocaleDateString(undefined, dateOptions)}</p>
                    </div>
                </Link>
            ))}

        </div>
    )
}