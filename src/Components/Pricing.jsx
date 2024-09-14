import React from "react";
import supabase from "../Shared/Supabase";
import { AiOutlineLoading } from "react-icons/ai";

const Pricing = () => {
  const [Loading, setLoading] = React.useState(false);
  const [Plans, setPlans] = React.useState([]);

  async function GetAllPlans() {
    let { data: Plans, error } = await supabase.from("Plans").select("*");
    return Plans;
  }

  React.useEffect(() => {
    async function GetPlans() {
      setLoading(true);
      let Plans = await GetAllPlans();
      setPlans(Plans);
      console.log(Plans);
      setLoading(false);
    }
    GetPlans();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-around items-center bg-gradient-to-r from-violet-300 to-violet-400  w-screen min-h-screen  pt-10 lg:pt-0">
        <h1 className=" md:text-6xl text-4xl font-extrabold text-gray-600 italic mb-4">
          Packages
        </h1>
        {Loading ? (
          <div className="flex flex-col justify-center items-center">
            <AiOutlineLoading className="animate-spin w-36 h-36" />
          </div>
        ) : (
          <div className="flex md:flex-row flex-col justify-center items-center self-center">
            {Plans.map((plan, index) => {
              return (
                <div key={index} className=" w-5/6 md:w-1/2 lg:w-1/4 px-6 mb-4">
                  <div className="bg-gray-800 hover:bg-gray-700 rounded shadow p-6">
                    <h3 className="text-2xl mb-4 text-white text-center">
                      {plan.PlanName}
                    </h3>
                    <p className="text-gray-400  mb-2">
                      You can upload {plan.bc} documents
                    </p>
                    <p className="text-gray-400  mb-2">
                      You can ask {plan.qps} per document
                    </p>
                    <p className="text-gray-400  mb-2">
                      Maximum Size Allowed : {plan.SizeAllowed}MB per document
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl text-white font-bold mb-4">
                        {plan.Price}€/month
                      </span>
                      <button className="py-2 px-3 rounded-md bg-blue-600 hover:bg-blue-800 text-white font-bold">
                        Subscribe!
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Pricing;
