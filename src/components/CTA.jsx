import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 sm:flex-row flex-coll bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col">
        <h2 className="font-poppins font-semibold xs:text-[44px] text-[37px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Let's try our service now!
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>

      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
