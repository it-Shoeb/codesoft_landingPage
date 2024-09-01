import './service.css'
const Service = () => {
  return (
    <>
      <div className="services">
        <div className="w-full md:w-1/2 mx-auto my-2">
          <h1 className="text-center font-bold text-3xl">Our Services</h1>
          <p className="mb-4 font-semibold text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo esse sunt aperiam officia numquam ipsam ducimus error minus doloribus.</p>
        </div>
        <div className="service-content-container">
            <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 gap-y-5 place-items-center">

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-3" alt="" className="service-image duration-100" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-4" alt="" className="service-image duration-100" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>
                
                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-5" alt="" className="service-image duration-100" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-6" alt="" className="service-image duration-100" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-7" alt="" className="service-image duration-100" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-8" alt="" className="" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-9" alt="" className="" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>
                

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-10" alt="" className="" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-11" alt="" className="" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

                <div className="card border w-48 p-3 rounded-2xl">
                    <div className="rounded-3xl overflow-hidden mb-2">
                        <img src="https://picsum.photos/200?random-12" alt="" className="" />
                    </div>
                    <p className="name font-semibold">Lorem Ipsum</p>
                </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Service;
