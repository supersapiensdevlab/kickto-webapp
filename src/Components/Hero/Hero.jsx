import walk2earn from "../../Assets/walk2earn.svg";
export default function Hero() {
  return (
    <div className=' min-h-screen bg-hero-pattern bg-cover sm:px-36 py-36 p-12'>
      <div className='  flex    '>
        <div>
          <div data-aos-duration='1000' data-aos='fade-up' className='relative'>
            <img
              className='drop-shadow-2xl '
              src={walk2earn}
              height='256'
              width='512'></img>
            {/* <h1 className='text-8xl font-bold text-white  z-10'>WALK</h1>
            <h1 className='text-9xl font-bold absolute top-0 ml-28 sm:ml-52 mt-12 scale-150 text-kickto-primary drop-shadow stroke-white stroke-2'>
              2
            </h1>
            <h1 className='text-8xl font-bold text-white  ml-36 sm:ml-60 z-10'>
              EARN
            </h1> */}
          </div>
          <p
            data-aos-duration='1500'
            data-aos='fade-in'
            className='py-6 text-white'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.<br></br> In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <button
            data-aos-duration='1200'
            data-aos='fade-up'
            className='btn btn-brand2 text-2xl -skew-x-12 hover:skew-x-0 transition-all duration-200 hover:shadow-md  '>
            TAKE A TOUR
          </button>
        </div>
      </div>
    </div>
  );
}
