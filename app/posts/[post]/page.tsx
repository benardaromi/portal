import Footer from "@/components/Footer"
import HorizontalRule from "@/components/HorizontalRule"
import NavBar from "@/components/NavBar"
import { getPost } from "@/lib/sanity-utils"
import { Avatar } from "@mui/joy"
import Image from "next/image"

type Props = {
    params: { post: string }
}

export default async function Post( { params }: Props ) {

    const slug = params.post
    const post = await getPost(slug)

    const dateOptions: any = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <NavBar/>
            <HorizontalRule/>
            <div className="my-5 grid grid-cols-3 gap-4 w-full items-center h-[20rem]">
                <div className="col-span-1 w-2/3">

                    <h2 className="flex mx-auto my-2 font-semibold text-gray-500">
                        <span className="px-2">PUBLISHED</span>
                        { new Date(post.publishedAt).toLocaleDateString(undefined, dateOptions)}
                    </h2>
                    <h1 className="flex mx-auto my-2 px-2 text-3xl  tracking-tight font-bold">{post.title}</h1>
                    <h3 className="my-2 px-2">This is the description</h3>
                    <div className="my-4 px-2 hover:cursor-pointer flex items-center space-x-3">
                        <Avatar size="lg" src={post.author.image}/>
                        <p className="font-semibold">{post.author.name}</p>
                    </div>

                </div>
                <div className="col-span-2">
                    <Image
                        src={post.image}
                        width={700}
                        height={350}
                        alt={post.alt}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="h-[15rem]">

            </div>
            <HorizontalRule/>
            <Footer/>
        </main>
    )
}