import { Form, Formik } from "formik";
import Header from "./Header";
import { useContext } from "react";
import { FormData, FormDataContext } from "@/store/context";
import AddOnCard from "./AddOnCard";
import NextButton from "./NextButton";

const AddOns = () => {
  const { setActiveIndex, formData, activeIndex } = useContext(
    FormDataContext
  ) as {
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData;
    activeIndex: number
  };

  return (
    <div className={`container ${activeIndex === 2 ? "flex" : "hidden"}`}>
      <Header
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience"
      />

      <Formik
        initialValues={{...formData}}
        onSubmit={(values, actions) => {
          console.log(actions, values, formData);
          setActiveIndex(3);
        }}
      >
        <Form className="container flex">
          <section className="flex flex-col gap-y-6 w-full">
            <AddOnCard
              desc="Access to multiplayer games"
              id="online-service"
              name="onlineService"
              price={formData.planDuration === "monthly" ? 1 : 10}
              type="checkbox"
              value="Online Service"
            />
            <AddOnCard
              desc="Extra 1TB of cloud save"
              id="larger-storage"
              name="largerStorage"
              price={formData.planDuration === "monthly" ? 2 : 20}
              type="checkbox"
              value="Larger Storage"
            />
            <AddOnCard
              desc="Custom theme on your profile"
              id="customize-profile"
              name="customizeProfile"
              price={formData.planDuration === "monthly" ? 2 : 20}
              type="checkbox"
              value="Customize Profile"
            />
          </section>

          <footer className="footer">
            <button
              className="text-cool-gray font-medium hover:text-marine-blue"
              onClick={() => setActiveIndex(1)}
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

export default AddOns;
