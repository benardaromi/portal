import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getPosts() {
    return client.fetch(
        groq`*[_type == 'post']{
            title,
            _id,
            author->{
                name,
                "image" : image.asset->url
            },
            categories[]->{title},
            publishedAt,
            _createdAt,
            "slug": slug.current,
            "image" : mainImage.asset->url,
            'alt' : mainImage.alt,
            'content': body[]{
                children[]{
                  text
                }
            }
        }`
    )
}

export async function getCategories() {
    return client.fetch(
        groq`*[_type == 'category']{
            _id,
            title,
            description,
            "slug": slug.current
        }`
    )

}

export async function getPost( slug: string ){
    return client.fetch(
        groq`*[_type == 'post' && slug.current == $slug][0]{
            title,
            _createdAt,
            _id,
            author->{
                name,
                "image" : image.asset->url
            },
            categories[]->{title},
            publishedAt,
            "slug": slug.current,
            "image" : mainImage.asset->url,
            'alt' : mainImage.alt,
            'content': body[]{
                children[]{
                  text
                }
            }
        }`,
        {slug}
    )
}
