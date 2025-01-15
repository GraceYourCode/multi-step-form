import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Thanks from "./Thanks";

const Main = () => {
  return (
    <main className="p-5 max-[425px]:py-10 min-[425px]:p-8 sm:p-16 lg:px-12 relative bg-white max-lg:rounded-xl xl:px-20 lg:pt-12 lg:pb-5 col-span-2 mt-24 sm:mt-40 md:mt-44 lg:mt-0">
      <PersonalInfo />
      <Plan />
      <AddOns />
      <Summary />
      <Thanks />
    </main>
  );
};

export default Main;
