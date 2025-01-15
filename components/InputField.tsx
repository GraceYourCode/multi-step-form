import { useField } from "formik";

interface ComponentProps {
  id: string;
  name: "phone" | "email" | "name";
  type: string;
  label: string;
  placeholder: string;
  value: string;
  error: boolean;
  errorMsg?: string;
}

const InputField: React.FC<ComponentProps> = ({
  label,
  error,
  errorMsg,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <div className="flex flex-col text-marine-blue relative gap-y-1">
      <label htmlFor={props.id} className="text-sm font-medium">
        {label}
      </label>
      <input
        {...props} {...field}
        className={`w-full border rounded-md px-3 py-2 font-medium text-marine-blue focus:border-purplish-blue ${
          error && "border-red"
        }`}
      />
      <span className="absolute right-0 top-0 text-xs font-bold text-red">{errorMsg}</span>
    </div>
  );
};

export default InputField;
