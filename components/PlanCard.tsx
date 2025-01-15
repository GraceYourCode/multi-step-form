 import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useField } from "formik";
import { useContext, useEffect } from "react";
import { FormData, FormDataContext } from "@/store/context";

interface ComponentProps {
  icon: StaticImport;
  planName: string;
  price: 9 | 90|12|120|15|150;
  planDuration: "yearly" | "monthly";
  value: "Arcade" | "Advanced" | "Pro"
  id: string;
  name: string;
  type: string;
}
const PlanCard: React.FC<ComponentProps> = ({
  icon,
  planName,
  price,
  planDuration,
  ...props
}) => {
  const [field] = useField(props);

  const { setFormData, formData } = useContext(FormDataContext) as {
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    formData: FormData;
  };

  useEffect(() => {
  if (field.checked) setFormData(prev => ({...prev, plan: {name: field.value, price}}))
  }, [field.checked, field.value, price, setFormData]);

    return (
      <>
        <label
          className={`border p-3 md:p-5 flex md:flex-col gap-5 md:gap-10 text-marine-blue rounded-md hover:border-purplish-blue cursor-pointer ${
            formData.plan.name === planName ? "border-purplish-blue bg-alabaster" : ""
          }`}
          htmlFor={props.id}
        >
          <Image src={icon} alt="" />
          <section className="text-marine-blue flex flex-col gap-y-1">
            <p className="font-medium translate-y-1">{planName}</p>
            <span className="text-cool-gray text-sm">{`$${price}/${
              planDuration === "monthly" ? "mo" : "yr"
            }`}</span>
            {planDuration === "yearly" && <small className="text-sm">2 months free</small>}
          </section>
        </label>
        <input {...field} {...props} className="hidden" />
      </>
    );
};

export default PlanCard;
