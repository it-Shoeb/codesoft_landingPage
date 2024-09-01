import './contact.css'
export default function Conact() {
    return(
        <>
            <div className="contact bg-zinc-800 gap-3 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white mt-10">
                <div className="col-1 border- p-10">
                    <p className="text-5xl font-bold">logo</p>
                </div>
                <div className="col-2 border-l p-10">
                    <h1 className="contact-heading text-xl relative pb-3">Navigate to Links</h1>
                    <ul>
                        <li><a className="text-sm hover:text-zinc-300 duration-150" href="">Home</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150" href="">About US</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150" href="">Service</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150" href="">Contact</a></li>
                    </ul>
                </div>
                <div className="col-3 border-l p-10">
                <h1 className="contact-heading text-xl relative pb-3">Social Links</h1>
                    <ul className=" flex flex-col gap-1">
                        <li><a className="text-sm hover:text-zinc-300 duration-150 flex gap-1" href=""><i class="ri-facebook-circle-line"></i>facebook</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150 flex gap-1" href=""><i class="ri-instagram-fill"></i>instagram</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150 flex gap-1" href=""><i class="ri-linkedin-box-fill"></i>linkedin</a></li>
                        <li><a className="text-sm hover:text-zinc-300 duration-150 flex gap-1" href=""><i class="ri-whatsapp-fill"></i>whatsapp</a></li>
                    </ul>
                </div>
                <div className="col-4 border-l p-10">
                    <h1 className="contact-heading text-xl relative pb-3">Terms & Conditions</h1>
                        <a className="text-xs mt-2 hover:text-zinc-300 duration-150 flex gap-1" href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus dolorem nihil deleniti soluta debitis assumenda ipsum aperiam similique atque.</a>

                </div>
            </div>
        </>
    )
}