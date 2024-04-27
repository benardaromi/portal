import Link from "next/link";

export default function Footer() {
    return (
        <div className="grid grid-cols-3 gap-4 h-[15rem]">
            <div className="flex-col">
                <Link href={'/resources'} className="block">Resources</Link>
                <Link href={'/categories'} className="block">Categories</Link>
                <Link href={'/guides'} className="block">Guides</Link>
            </div>
            <div>
                <Link href={'/blog'} className="block">Blog</Link>
                <Link href={'/contact'} className="block">Contact</Link>
                <Link href={'/newsletter'} className="block">Newsletter</Link>
            </div>
            <div>
                 <Link href={'/blog'} className="block">Blog</Link>
                 <Link href={'/contact'} className="block">Contact</Link>
                 <Link href={'/newsletter'} className="block">Newsletter</Link>
            </div>
        </div>
    )
}