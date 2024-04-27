import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string;
    publishedAt: Date;
    author: string,
    categories: string,
    title: string;
    slug: string;
    image: string;
    alt: string;
    body: PortableTextBlock[];
}