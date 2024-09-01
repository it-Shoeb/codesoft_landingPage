const image = "https://picsum.photos/1280/510"
import "./hero.css"

const Hero = () => {
    return (
        <>
        <div className="wrapper flex flex-col items-center justify-center h-96">
            <img className="image w-full h-full bg-cover" src={image} alt="" />

            <div className="content z-5 w-full p-2 md:w-1/2">
                <h3 className="p-1 text-5xl mb-2 font-bold">We are Creative</h3>
                <h1 className="p-1 mb-4">Cretive Digital Marketing & Agency</h1>
                <p className="p-1 text-xs mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsam harum, accusantium atque quia voluptas ut suscipit exercitationem itaque voluptates architecto nam fugit quis beatae numquam velit ratione perspiciatis. Placeat.</p>
                <div className="hero-cta flex gap-3 flex-col md:flex-row">
                    <a className="px-4 py-2 border font-semibold rounded-lg bg-zinc-900 hover:bg-transparent" href="">Read More</a>
                    <a className="px-4 py-2 border font-semibold rounded-lg border-zinc-900 hover:bg-zinc-900" href="">Request a Consult</a>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Hero