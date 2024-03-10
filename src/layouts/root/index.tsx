import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/sidebar';

export function RootLayout() {
  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-row'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
