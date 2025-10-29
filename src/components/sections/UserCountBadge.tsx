import Image from 'next/image';
import { div } from 'motion/react-client';

const UserCountBadge = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="rounded-xl shadow-2xl bg-white py-4 pl-4 border-gray-100 flex items-center gap-2 border-2 md:w-11/12 w-[40vw]">

        {/* First Avatar */}
        <div className='flex md:flex-row flex-col'>
          <div className='flex'>
            <div className="relative z-10 -mr-[10%]">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                alt="User A"
                width={48}
                height={48}
                className="rounded-full border-2 border-white object-cover"
                unoptimized
              />
            </div>

            {/* Second Avatar overlapping the first by 5% */}
            <div className="relative -mr-[10%] z-20">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                alt="User B"
                width={48}
                height={48}
                className="rounded-full border-2 border-white object-cover"
                unoptimized
              />
            </div>

            {/* Third Avatar overlapping the second by 5% */}
            <div className="relative -mr-[10%] z-30">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                alt="User C"
                width={48}
                height={48}
                className="rounded-full border-2 border-white object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-10/12 pl-4 text-center md:text-left">
            <p className="text-xl font-bold text-gray-800 leading-none">120K+</p>
            <p className="text-sm text-gray-500 leading-none mt-1">Active users</p>
          </div>
        </div>

      </div>
    </div >
  );
};

export default UserCountBadge;
