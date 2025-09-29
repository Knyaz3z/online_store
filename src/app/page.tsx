import Image from "next/image";
import Nav from "@/components/Header/Nav/Nav";

export default function Home() {

  return (
    <div>
        <Image className={'m-auto mt-10'} src={'/hero_image.jpg'} alt={'главное изображение'} width={954} height={545}/>
        <div className={'flex justify-around gap-10 max-w-250 ml-auto mr-auto mt-10'}>
            <div
                className={'bg-zinc-950 max-w-120 m-h-64 rounded-4xl flex justify-around gap-5 items-center p-3 pl-10 pr-10 text-white font-light'}>
                <div className={'flex flex-col items-start gap-5 justify-start'}>
                    <h4>Airpods 3</h4>
                    <p>Максимальная тишина <br/> Минимальный размер</p>
                    <button className={'border cursor-pointer rounded-4xl p-2 max-w-30 w-full hover:bg-white hover:text-black transition duration-300 ease-out'}>Заказать</button>
                </div>
                <div className={''}>
                    <Image src={'/airpods_advantage.png'} alt={'airpods'} width={209} height={228}/>
                </div>
            </div>
            <div
                className={'bg-zinc-950 max-w-120 m-h-64 rounded-4xl flex justify-around gap-5 items-center p-3 pl-10 pr-10 text-white font-light'}>
                <div className={'flex flex-col items-start gap-5 justify-start'}>
                    <h4>Airpods 3</h4>
                    <p>Максимальная тишина <br/> Минимальный размер</p>
                    <button className={'border cursor-pointer rounded-4xl p-2 max-w-30 w-full hover:bg-white hover:text-black transition duration-300 ease-out'}>Заказать</button>
                </div>
                <div className={''}>
                    <Image src={'/airpods_advantage.png'} alt={'airpods'} width={209} height={228}/>
                </div>
            </div>
        </div>
        <Nav/>

        ADVANTAGE
    </div>
  );
}
