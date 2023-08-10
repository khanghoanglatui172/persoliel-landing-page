import Link from 'next/link';
import VideoBanner from "@/app/components/banner/video";

function Banner() {
    return (
        <div className='w-full h-[45.7] relative'>
            <VideoBanner src={'/banner.mp4'} classes={'object-cover object-banner-video w-[100%] h-[100%] z-0'}/>
            <div className='w-[62.2rem] h-[100%] absolute top-0 object-banner-video left-0 bg-gradient-to-r from-layer from-[30%] z-[1]'>
                <div className='w-[33.7rem] h-[100%] relative'>
                    <div className='w-[100%] absolute top-[30%] left-[7.6rem] z-[2]'>
                        <div
                            className='banner-title text-app-blue text-[3.6rem] font-larken not-italic !font-thin leading-[3.9rem] mb-10'>Enjoy
                            a friction-free<br/>journey between<br/>car and cabin seat.
                        </div>
                        <Link href='#' className='w-[162px] h-[73px] relative'>
                            <div className='w-[148.80px] h-[61px] left-[6.23px] top-[6px] absolute bg-app-amber'/>
                            <div
                                className='w-[162px] h-[73px] left-0 top-0 absolute border border-app-amber'/>
                            <div
                                className='w-[148.80px] h-[26px] left-[4.57px] top-[21px] absolute text-center text-amber-50 text-[18.99px] font-bold uppercase'>reserve
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;