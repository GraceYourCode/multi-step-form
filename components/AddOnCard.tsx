/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormData, FormDataContext } from "@/store/context";
import { useField } from "formik";
import { useContext, useEffect } from "react";

interface ComponentProps {
  desc: string;
  price: number;
  id: string;
  name: string;
  value: string;
  type: string;
}

const AddOnCard: React.FC<ComponentProps> = ({ desc, price, ...props }) => {
  const [field] = useField(props);

  const { setFormData, formData } = useContext(FormDataContext) as {
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    formData: FormData;
  };

  useEffect(() => {
    if (formData.addOns?.some(obj => obj.name === props.value)) field.checked = true;
    console.log(field)
  }, [formData])

  useEffect(() => {
    if (field.checked) {
      const newAddOnList = formData.addOns
        ? (formData.addOns as Array<any>).concat({ name: props.value, price })
        : [{ name: props.value, price }];

      setFormData((prev) => ({ ...prev, addOns: newAddOnList }));
      console.log(formData);
    } else {
      const newAddOnList = formData.addOns
        ? (formData.addOns as Array<any>).filter((e) => e.name !== props.value)
        : undefined;
      setFormData((prev) => ({ ...prev, addOns: newAddOnList }));
      console.log(formData);
    }
  }, [field.checked, field.value, price, props.value, setFormData]);

  return (
    <label
      htmlFor={props.id}
      className={`${
        formData.addOns?.some(obj => obj.name === props.value) && "border-purplish-blue bg-alabaster"
      } border rounded-md p-3 sm:p-5 flex gap-x-4 items-center cursor-pointer hover:border-purplish-blue`}
    >
      <input
        {...props}
        {...field}
        className="accent-purplish-blue bg-white w-4 h-4"
      />

      <main className="text-marine-blue text-sm">
        <h1 className="font-bold">{props.value}</h1>
        <p className="text-xs text-cool-gray">{desc}</p>
      </main>

      <span className="text-purplish-blue text-sm ml-auto">{`+$${price}/${
        formData.planDuration === "monthly" ? "mo" : "yr"
      }`}</span>
    </label>
  );
};

export default AddOnCard;
