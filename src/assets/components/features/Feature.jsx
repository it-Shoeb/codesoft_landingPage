import './feature.css'

const Feature = () => {
  return (
    <>
      <div className="feature mt-20 px-5 py-2">
        <h1 className="heading text-2xl font-bold text-center">Features</h1>

        <div className="cards flex flex-wrap p-5 gap-3 justify-center">
          <div className="card flex w-96 gap-4 border p-5 rounded items-center">
            <div className="image-container">
                <i class="ri-admin-fill ri-5x"></i>
            </div>
            <div className="content">
                <div className="name font-bold">Lorem, ipsum.</div>
                <div className="description text-xs mt-1 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum!</div>
                <div className="feature-cta flex gap-2">
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg border-green-100 hover:bg-green-100 duration-300" href="">Intrested</a>
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg bg-green-100 hover:bg-transparent duration-300" href="">Similar</a>
                </div>
            </div>
          </div>
          <div className="card flex w-96 gap-4 border p-5 rounded items-center">
            <div className="image-container">
                <i class="ri-admin-fill ri-5x"></i>
            </div>
            <div className="content">
                <div className="name font-bold">Lorem, ipsum.</div>
                <div className="description text-xs mt-1 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum!</div>
                <div className="feature-cta flex gap-2">
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg border-green-100 hover:bg-green-100 duration-300" href="">Intrested</a>
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg bg-green-100 hover:bg-transparent duration-300" href="">Similar</a>
                </div>
            </div>
          </div>
          <div className="card flex w-96 gap-4 border p-5 rounded items-center">
            <div className="image-container">
                <i class="ri-admin-fill ri-5x"></i>
            </div>
            <div className="content">
                <div className="name font-bold">Lorem, ipsum.</div>
                <div className="description text-xs mt-1 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eum!</div>
                <div className="feature-cta flex gap-2">
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg border-green-100 hover:bg-green-100 duration-300" href="">Intrested</a>
                    <a className="px-2 py-1 w-full text-sm text-center border rounded-lg bg-green-100 hover:bg-transparent duration-300" href="">Similar</a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Feature;
