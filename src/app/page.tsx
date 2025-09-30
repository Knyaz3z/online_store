import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import {Gallery} from "@/components/Gallery/Gallery";
import {Suspense} from "react";
import {WhyUs} from "@/components/WhyUs";

export default function Home() {

  return (
    <div>
        <Image className={'m-auto mt-10'} src={'/hero_image.jpg'} alt={'главное изображение'} width={954} height={545}/>
        <div className={'flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto mt-8 md:mt-10 px-4 sm:px-6 lg:px-8'}>
            <div
                className={'bg-zinc-950 w-full max-w-md lg:max-w-lg rounded-3xl md:rounded-4xl flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 p-6 md:p-8 text-white font-light'}>
                <div className={'flex flex-col items-center sm:items-start gap-4 md:gap-5 justify-start text-center sm:text-left order-2 sm:order-1'}>
                    <h4 className={'text-lg md:text-xl lg:text-2xl font-medium'}>Airpods 3</h4>
                    <p className={'text-sm md:text-base lg:text-lg leading-relaxed'}>Максимальная тишина <br/> Минимальный размер</p>
                    <button className={'border cursor-pointer rounded-3xl md:rounded-4xl px-4 md:px-6 py-2 md:py-3 w-full max-w-32 md:max-w-36 hover:bg-white hover:text-black transition duration-300 ease-out text-sm md:text-base'}>
                        Заказать
                    </button>
                </div>
                <div className={'order-1 sm:order-2'}>
                    <Image
                        src={'/airpods_advantage.png'}
                        alt={'airpods'}
                        width={209}
                        height={228}
                        className={'w-32 h-auto md:w-40 lg:w-48 xl:w-52'}
                    />
                </div>
            </div>

            <div
                className={'bg-zinc-950 w-full max-w-md lg:max-w-lg rounded-3xl md:rounded-4xl flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 p-6 md:p-8 text-white font-light'}>
                <div className={'flex flex-col items-center sm:items-start gap-4 md:gap-5 justify-start text-center sm:text-left order-2 sm:order-1'}>
                    <h4 className={'text-lg md:text-xl lg:text-2xl font-medium'}>Airpods 3</h4>
                    <p className={'text-sm md:text-base lg:text-lg leading-relaxed'}>Максимальная тишина <br/> Минимальный размер</p>
                    <button className={'border cursor-pointer rounded-3xl md:rounded-4xl px-4 md:px-6 py-2 md:py-3 w-full max-w-32 md:max-w-36 hover:bg-white hover:text-black transition duration-300 ease-out text-sm md:text-base'}>
                        Заказать
                    </button>
                </div>
                <div className={'order-1 sm:order-2'}>
                    <Image
                        src={'/airpods_advantage.png'}
                        alt={'airpods'}
                        width={209}
                        height={228}
                        className={'w-32 h-auto md:w-40 lg:w-48 xl:w-52'}
                    />
                </div>
            </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <Nav/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            <Gallery/>
        </Suspense>

        <WhyUs/>

    </div>
  );
}
