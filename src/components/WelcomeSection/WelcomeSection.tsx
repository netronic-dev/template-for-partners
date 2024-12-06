import { Icon } from "../Icon";
import imgOne from "../../../public/images/welcome-img-1.webp";
import imgTwo from "../../../public/images/welcome-img-2.webp";
import imgThree from "../../../public/images/welcome-img-3.webp";
import imgFour from "../../../public/images/welcome-img-4.webp";
import bg from "../../../public/images/welcome-bg.webp";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="pt-[126px] pb-[131px] relative overflow-hidden mt-[-17px]">
      <div className="absolute top-[-63%] right-[-107%] w-[1918px] h-[2143px] rotate-[90.139] z-[-1]">
        <Image src={bg} alt="Welcome section bg" width={1918} height={2143} />
      </div>
      <div className="pl-[68px] relative">
        <div className="flex items-center gap-[61px] mb-[24px]">
          <h2 className="max-w-[344px] text-[var(--secondary-text-color)] text-[50px] font-manrope font-semibold uppercase]">
            WELCOME <br />
            <span className="text-[var(--accent-color)]">
              TO NETRONIC UNIVERSE
            </span>
          </h2>
          <button
            aria-label="Play video"
            className="flex items-center justify-center w-[96px] h-[96px] rounded-full border-[1px] border-solid border-[#E8E8E8] cursor-pointer"
          >
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full border-[1px] border-solid border-[#E8E8E8]">
              <Icon name="icon-play" width={28} height={25} />
            </div>
          </button>
        </div>
        <p className="max-w-[513px] mb-[24px] font-manrope text-lg leading-[24px] font-medium">
          <span className="text-[var(--accent-color)]">
            Ми пропонуємо лазертаг обладнання від компанії NETRONIC
          </span>
          . Компанія NETRONIC працює на ринку вже понад 19 років. Їх команда
          пройшла шлях від простого пейнтбольного клубу до всесвітньо відомого
          виробника лазертаг-обладнання, VR атракціонів та надувних укриттів.
        </p>
        <p className="max-w-[513px] font-manrope text-lg leading-[24px] font-medium">
          <span className="text-[var(--accent-color)]">Сьогодні NETRONIC</span>{" "}
          - це група компаній, що включає такі торгові бренди: LASERTAG.NET,
          GALAXY, VION VR, AІRBUNKER. Ця компанія виготовляє інноваційне
          обладнання для аренного та мобільного лазертагу.
        </p>
        <div className="absolute top-[7%] right-[27%] w-[361px] h-[323px]">
          <Image
            src={imgOne}
            alt="img-one"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[-16%] right-[7%] w-[292px] h-[261px]">
          <Image
            src={imgTwo}
            alt="img-two"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[-9%] right-[4%] w-[360px] h-[322px]">
          <Image
            src={imgThree}
            alt="img-three"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[-21%] right-[30%] w-[237px] h-[213px]">
          <Image
            src={imgFour}
            alt="img-four"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
