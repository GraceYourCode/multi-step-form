import Image from "next/image"
import thanksIcon from '@/public/assets/images/icon-thank-you.svg'
import { FormDataContext } from "@/store/context";
import { useContext } from "react";
import Header from "./Header";

const Thanks = () => {
  const { activeIndex } = useContext(
    FormDataContext
  ) as {
    activeIndex: number
  };

  return (
    <div className={`container items-center justify-center *:text-center py-12 md:py-20 ${activeIndex === 4 ? "flex" : "hidden"}`}>
      <Image src={thanksIcon} alt=""/>
<Header title="Thank you!" desc="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"/>
    </div>
  )
}

export default Thanks
