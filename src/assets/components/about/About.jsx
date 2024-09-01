const About = () => {
  return (
    <>
      <div className="about p-5">
        <div className="heading w-full md:w-1/2 mx-auto my-2">
          <h1 className="text-center font-bold text-3xl">About Us</h1>
          <p className="font-semibold text-center mt-2">
            15 years, we passionate about acheving better results for out client
          </p>
        </div>
        <div className="flex flex-wrap m-5 flex-col md:flex-row items-center">
          <div className="about-lhs flex-1 text-justify p-5">
            <p className="mb-5 leading-loose">
              <span className="text-3xl font-semibold">L</span>orem ipsum dolor
              sit amet, consectetur adipisicing elit. Illum reprehenderit
              voluptatum laborum fugit numquam. Fugiat veniam possimus nesciunt
              iusto inventore quis eum velit sequi fugit, quod rem non,
              voluptatem corporis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus similique molestiae repellendus impedit
              dicta praesentium aspernatur dolorum, veritatis esse eligendi
              nihil, veniam dignissimos alias adipisci debitis nesciunt,
              necessitatibus hic suscipit?
            </p>
            <a
              href=""
              className="cta bg-zinc-800 text-white font-semibold px-2 py-1 rounded hover:bg-zinc-600"
            >
              Read More
            </a>
          </div>
          <div className="about-lhs flex-1">
            <div className="about-imageContainer border overflow-hidden rounded-3xl">
              <img
                className="bg-contain hover:scale-105 duration-200"
                src="https://picsum.photos/600/400?random=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
