import './header.css'

const Header = () => {
    return(
        <>
            <header className="flex">
                <div className="nav-bar flex items-center justify-between w-screen px-12 py-2">
                    <div className="logo">logo</div>
                    <ul className="nav-links gap-5 hidden sm:flex">
                        <li><a className='hover:text-black' href="/home">Home</a></li>
                        <li><a className='hover:text-black' href="/about">About</a></li>
                        <li><a className='hover:text-black' href="/service">Service</a></li>
                        <li><a className='hover:text-black' href="/contact">Contact</a></li>
                    </ul>
                    <div className="header-cta gap-3 hidden sm:flex">
                        <a href="" className="px-2 py-1 border rounded-lg border-zinc-900 hover:bg-zinc-900">Sign In</a>
                        <a href="" className="px-2 py-1 border rounded-lg bg-zinc-900 hover:bg-transparent">Sign Up</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header