import Link from "next/link";

export default function NavBar() {
    return(
        <div className="flex relative items-center w-full justify-around">
            
            <div>
                <Link
                    href={'/'}>
                    <h3 className="font-extrabold text-lg bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text tracking-tight drop-shadow-md">Portal</h3>
               </Link> 
            </div>
           
            <div className="flex space-x-3">
                      <Link
                        href={'/blog'}>
                        <h3 className="hover:scale-105 transtion">Blog</h3>
                      </Link>
                      <Link
                        href={'/resources'}>
                        <h3 className="hover:scale-105 transtion">Resources</h3>
                      </Link>
                      <Link
                        href={'/contact'}>
                        <h3 className="hover:scale-105 transtion">Contact</h3>
                      </Link>
            </div>
            
            <Link
                href={'/account'}>
                <h3 className="hover:scale-105 transtion">Account</h3>
            </Link>
        </div>
    )
}