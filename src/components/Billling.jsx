import { apple, bill, google } from "../assets";

const Billling = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6 sm:px-16 px-6"
    >
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className="flex flex-1 justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          voluptates natus assumenda nulla. Dolorem et mollitia porro officiis
          excepturi esse amet ipsum, placeat odit adipisci vitae ullam, rem
          alias iusto.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
            <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billling;
