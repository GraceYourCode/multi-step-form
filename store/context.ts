import { createContext } from "react";

export interface FormData {
  name: string;
  phone: string;
  email: string;
  plan:
    | { name: "Arcade"; price: 9 | 90 }
    | { name: "Advanced"; price: 12 | 120 }
    | { name: "Pro"; price: 150 | 15 };
  planDuration: "monthly" | "yearly";
  addOns?: {
    name: "Online Service" | "Larger storage" | "Customizable profile";
    price: 1 | 10 | 2 | 20;
  }[];
}

export const FormDataContext = createContext<
  | {
      formData: FormData;
      setFormData: React.Dispatch<React.SetStateAction<FormData>>;
      activeIndex: number;
      setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    }
  | undefined
>(undefined);
