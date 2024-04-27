import { getPosts } from "@/lib/sanity-utils"
import HorizontalRule from "./HorizontalRule"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default async function Articles() {
    const posts = await getPosts()
    
    return(
        <div className="grid grid-cols-5 gap-6 mx-auto w-5/6 p-4 h-dvh mt-2 mb-4">
            <div className=" col-span-1 h-full border border-gray-50 p-2 rounded-lg hover:scale-105 hover:shadow hover:shadow-white transition">
                <div className="my-4">
                    <h1 className="p-1 font-bold drop-shadow">Jambo!</h1>
                    <p className="tracking-tight text-wrap py-2">This is an information archive. Feel free to browse the entire collection</p>
                </div>
                <HorizontalRule/>
                <div className="mt-2 mb-3 p-1 text-xs tracking-tight font-semibold h-[10rem]">
                    CHECK OUT THE BLOG
                    <div className=" p-4 my-2 h-2/3 border rounded-md shadow-md hover:border-yellow-300 hover:cursor-pointer transition">
                        link to blog
                    </div>
                </div>
                <HorizontalRule/>
                <div className="p-3">
                    <h3>Categories</h3>
                </div>
            </div>

            <div className="col-span-4  h-full border border-gray-50 p-3 rounded-lg hover:scale-105 hover:drop-shadow-lg transition">
                <div className="grid grid-cols-3 gap-3 h-[15rem] rounded-lg">
                    <div className="col-span-2 border">
                        {posts.map((post) => (

                            <Link
                                href={'/posts'}
                                key={post._id}>

                                    {post.image && (
                                        <Image 
                                            src={post.image}
                                            alt={post.title}
                                            width={550}
                                            height={240}
                                            className="object-contain"
                                        />
                                    )}

                                    <div className="p-4">
                                        <h1 className="flex items-center"><span className="font-bold px-1 bg-clip-text text-transparent bg-yellow-400">Articles:</span> {post.title} <span className="px-1"><ArrowRightIcon/></span></h1>
                                        <h3 className="text-sm">by {post.author.name}</h3>
                                    </div>
                            </Link>
                        ))}
                      
                    </div>
                    <div className="col-span-1 border">
                        3
                    </div>
                </div>
            </div>
        </div>
    )
}