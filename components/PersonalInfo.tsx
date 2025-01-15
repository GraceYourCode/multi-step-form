/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import InputField from "./InputField";
import { FormData, FormDataContext } from "@/store/context";
import { Form, Formik } from "formik";
import { formSchema } from "@/schema/input";
import { toTitleCase } from "@/utils/functions";
import Header from "./Header";
import NextButton from "./NextButton";

const PersonalInfo = () => {
  const { setActiveIndex, formData, setFormData, activeIndex } = useContext(
    FormDataContext
  ) as {
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    activeIndex: number;
  };

  console.log(formData);

  const onSubmit = (values: any) => {
    console.log(values);

    setFormData((prev) => ({
      ...prev,
      name: values.name,
      email: values.email,
      phone: values.phone,
    }));
    setActiveIndex(1);
  };

  return (
    <div className={`container ${activeIndex === 0 ? "flex" : "hidden"}`}>
      <Header
        title="Personal info"
        desc="Please provide your name, email address and phone number"
      />

      <Formik
        initialValues={{ ...formData }}
        onSubmit={onSubmit}
        validationSchema={formSchema}
      >
        {({ values, errors, touched }) => (
          <Form className="container flex">
            <section className="flex flex-col gap-y-4 sm:gap-y-6 w-full">
              <InputField
                id="name"
                label="Name"
                name="name"
                type="text"
                placeholder="e.g Stephen King"
                value={toTitleCase(values.name)}
                error={touched.name && errors.name ? true : false}
                errorMsg={touched.name ? errors?.name : ""}
              />
              <InputField
                id="email"
                label="Email Address"
                name="email"
                type="email"
                placeholder="e.g stephenking@lorem.com"
                value={values.email}
                error={touched.email && errors.email ? true : false}
                errorMsg={touched.email ? errors?.email : ""}
              />
              <InputField
                id="phone_number"
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="e.g +1 234 567 890"
                value={values.phone}
                error={touched.phone && errors.phone ? true : false}
                errorMsg={touched.phone ? errors?.phone : ""}
              />
            </section>

          <footer className="footer">
              <NextButton />
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
