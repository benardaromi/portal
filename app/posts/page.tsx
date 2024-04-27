import HorizontalRule from "@/components/HorizontalRule";
import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { getCategories } from "@/lib/sanity-utils";
import Link from "next/link";
import Footer from "@/components/Footer";

export default async function PostsPage() {
    const categories = await getCategories()


    return (
        <main className="flex min-h-screen flex-col p-24">
            <NavBar/>
            <div className="px-28">
                <div className="p-4 mt-3">
                    <h1 className="font-semibold text-sm">FILTER BY CATEGORY</h1>
                    <div className="mt-4">

                        <Link href={'/categories'} className="px-2">All</Link>
                        {categories.map((category : any) => (
                            <Link href={`/categories/${category.slug}`} key={category._id} className="px-2">
                                {category.title}
                            </Link>

                        ))}

                    </div>
                </div>
            </div>
            <HorizontalRule/>
            <Posts/>
            <HorizontalRule/>
            <Footer/>
        </main>
    )
}