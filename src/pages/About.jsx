const About = () =>
{
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Welcome to Comfy Store, your ultimate online shopping destination! Discover a wide array of high-quality products across various categories, all curated to meet your unique needs. Enjoy seamless browsing, secure transactions, and fast shipping. Our user-friendly platform makes shopping easy and enjoyable, ensuring you find exactly what you're looking for with just a few clicks.


      </p>
    </>
  );
};
export default About;
