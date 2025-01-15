import { FormData, FormDataContext } from "@/store/context";
import { useContext } from "react";
import Header from "./Header";
import { toTitleCase } from "@/utils/functions";

const Summary = () => {
  const { setActiveIndex, formData, activeIndex } = useContext(
    FormDataContext
  ) as {
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    activeIndex: number;
  };

  return (
    <div className={`container ${activeIndex === 3 ? "flex" : "hidden"}`}>
      <Header
        title="Finishing up"
        desc="Double-check everything looks OK before confirming"
      />

      <main>
        <section className="bg-magnolia p-3 sm:p-7 rounded-md">
          <main className="flex items-center justify-between pb-5 border-b">
            <section>
              <header className="text-marine-blue font-medium">{`${
                formData.plan.name
              } (${toTitleCase(formData.planDuration)})`}</header>
              <button className="text-cool-gray underline text-sm hover:text-purplish-blue">
                Change
              </button>
            </section>
            <span className="font-bold text-marine-blue">{`$${
              formData.plan.price
            }/${formData.planDuration === "monthly" ? "mo" : "yr"}`}</span>
          </main>

          {formData.addOns && (
            <aside className="flex flex-col gap-y-3 mt-5">
              {formData.addOns.map((obj, index) => (
                <section
                  key={index}
                  className="text-cool-gray flex items-center justify-between text-sm"
                >
                  <p>{obj.name}</p>
                  <span className="text-marine-blue text-sm">{`+$${obj.price}/${
                    formData.planDuration === "monthly" ? "mo" : "yr"
                  }`}</span>
                </section>
              ))}
            </aside>
          )}
        </section>

        <section className="flex justify-between items-center text-sm px-3 sm:px-7 text-cool-gray mt-4">
          <p>{`Total (per ${
            formData.planDuration === "monthly" ? "month" : "year"
          })`}</p>
          <span className="text-lg text-purplish-blue font-bold">
            {`+$${
              formData.addOns
                ? formData.addOns.reduce((sum, item) => sum + item.price, 0) +
                  formData.plan.price
                : formData.plan.price
            }/${formData.planDuration === "monthly" ? "mo" : "yr"}`}
          </span>
        </section>
      </main>

      <footer className="footer">
        <button
          className="text-cool-gray font-medium hover:text-marine-blue"
          onClick={() => setActiveIndex(2)}
          type="button"
        >
          Go Back
        </button>

      <button className="button bg-purplish-blue hover:bg-purplish-blue/80" onClick={() => setActiveIndex(4)}> 
          Confirm
        </button>
      </footer>
    </div>
  );
};

export default Summary;
