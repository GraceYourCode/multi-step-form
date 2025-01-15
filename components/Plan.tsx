import { useContext } from "react";
import Header from "./Header";
import NextButton from "./NextButton";
import { FormData, FormDataContext } from "@/store/context";
import PlanCard from "./PlanCard";
import advancedIcon from "@/public/assets/images/icon-advanced.svg";
import arcadeIcon from "@/public/assets/images/icon-arcade.svg";
import proIcon from "@/public/assets/images/icon-pro.svg";
import { Form, Formik } from "formik";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

const Plan = () => {
  const { setActiveIndex, formData, setFormData, activeIndex } = useContext(
    FormDataContext
  ) as {
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    activeIndex: number;
  };

  return (
    <div className={`container ${activeIndex === 1 ? "flex" : "hidden"}`}>
      <Header
        title="Select your plan"
        desc="You have option of monthly or yearly billing"
      />

      <Formik
        initialValues={{ ...formData }}
        onSubmit={() => setActiveIndex(2)}
      >
        <Form className="container flex">
          <main className="grid md:grid-cols-3 gap-4">
            <PlanCard
              planDuration={formData.planDuration}
              planName="Arcade"
              price={formData.planDuration === "monthly" ? 9 : 90}
              icon={arcadeIcon}
              id="arcade"
              value="Arcade"
              name="plan"
              type="radio"
            />
            <PlanCard
              planDuration={formData.planDuration}
              planName="Advanced"
              price={formData.planDuration === "monthly" ? 12 : 120}
              icon={advancedIcon}
              id="advanced"
              value="Advanced"
              name="plan"
              type="radio"
            />
            <PlanCard
              planDuration={formData.planDuration}
              planName="Pro"
              price={formData.planDuration === "monthly" ? 15 : 150}
              icon={proIcon}
              id="pro"
              value="Pro"
              name="plan"
              type="radio"
            />
          </main>

          <div className="bg-magnolia centralize gap-x-4 py-2 rounded-md">
            <p
              className={`${
                formData.planDuration === "monthly"
                  ? "text-marine-blue"
                  : "text-cool-gray"
              }`}
            >
              Monthly
            </p>
            {formData.planDuration === "monthly" ? (
              <MdToggleOff
                className={`text-4xl cursor-pointer text-marine-blue`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, planDuration: "yearly" }))
                }
              />
            ) : (
              <MdToggleOn
                className={`text-4xl cursor-pointer text-marine-blue`}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, planDuration: "monthly" }))
                }
              />
            )}
            <p
              className={`${
                formData.planDuration === "yearly"
                  ? "text-marine-blue"
                  : "text-cool-gray"
              }`}
            >
              Yearly
            </p>
          </div>

          <footer className="footer">
            <button
              className="text-cool-gray font-medium hover:text-marine-blue"
              onClick={() => setActiveIndex(0)}
              type="button"
            >
              Go Back
            </button>
            <NextButton />
          </footer>
        </Form>
      </Formik>
    </div>
  );
};

export default Plan;
