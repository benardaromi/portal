import Link from "next/link";

export default function Footer() {
    return (
        <div className="grid grid-cols-3 gap-4 h-[15rem]">
            <div className="flex-col">
                <Link href={'/resources'}>Resources</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/guides'}>Guides</Link>
            </div>
            <div>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/newsletter'}>Newsletter</Link>
            </div>
            <div>
                 <Link href={'/blog'}>Blog</Link>
                 <Link href={'/contact'}>Contact</Link>
                 <Link href={'/newsletter'}>Newsletter</Link>
            </div>
        </div>
    )
}