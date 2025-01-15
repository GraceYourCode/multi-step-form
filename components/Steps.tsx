import { useContext } from "react";
import Step from "./Step";
import { FormDataContext } from "@/store/context";

const steps: string[] = ["Your Info", "Select Plan", "Add-ons", "Summary"];
const Steps = () => {
  const { activeIndex } = useContext(FormDataContext) as {
    activeIndex: number;
  };

  return (
    <ol className="absolute top-0 left-0 lg:h-full py-10 sm:py-20 md:py-24 lg:p-8 flex max-lg:w-screen max-lg:gap-x-6 max-lg:justify-center lg:flex-col gap-y-6">
      {steps.map((step, index) => (
        <Step
          no={index + 1}
          name={step}
          key={index}
          active={activeIndex === index}
        />
      ))}
    </ol>
  );
};

export default Steps;
