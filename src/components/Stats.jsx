import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex items-center justify-center flex-wrap flex-row sm:mb-20 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-1 md:justify-center justify-start items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold text-[30px] xs:text-[40px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
          
        </div>
      ))}
    </section>
  );
};

export default Stats;
