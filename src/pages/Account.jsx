import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/97d38c7b-3900-4bc1-9028-da65b2f1b7e8/US-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        {/* Overlay */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
      {/* <SavedShows /> */}
    </>
  );
}

export default Account