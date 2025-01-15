import desktopSidebar from '@/public/assets/images/bg-sidebar-desktop.svg';
import mobileSideBar from '@/public/assets/images/bg-sidebar-mobile.svg'
import Image from 'next/image';
import Steps from './Steps';

const SideBar = () => {
  return (
    <aside className='lg:relative w-screen top-0 left-0 lg:w-fit absolute'>
      <Image src={desktopSidebar} alt='icon or image for my desktop side bar' className='hidden lg:block'/>
      <Image src={mobileSideBar} alt='icon or image for my mobile side bar' className='lg:hidden w-full'/>
      <Steps />
    </aside>
  )
}

export default SideBar
