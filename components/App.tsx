"use client";

import { useState } from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import { FormData, FormDataContext } from "@/store/context";

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    plan: {
      name: "Arcade",
      price: 9,
    },
    planDuration: "monthly"
  });

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, activeIndex, setActiveIndex }}
    >
      <div className="w-11/12 pb-20 sm:w-5/6 xl:w-2/3 lg:bg-white sm:p-4 rounded-lg lg:grid grid-cols-3">
        <SideBar />
        <Main />
      </div>
    </FormDataContext.Provider>
  );
};

export default App;
