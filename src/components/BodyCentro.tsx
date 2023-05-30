import styles from "../style";
import {img_robot } from "../assets";

const BodyCentro = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} img_background`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.heading3} ml-2`}>
           Nosotros somos:
          </p>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[78px] text-[62px] text-white ss:leading-[100.8px] leading-[75px] w-full text-gradient">
          Countigo
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nos gustan los retos que nos haga superarnos y nos permitan mejorar, crecer. Contamos con devOps, equipos de Front-end / Back-end / Fullstack, Project Managers expertos en metodologías ágiles. Somos un equipo de profesionales, diverso, joven y que disfruta haciendo su trabajo, comprometido con los objetivos de sus clientes y con la calidad del resultado.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={img_robot} alt="img_robot" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default BodyCentro;
