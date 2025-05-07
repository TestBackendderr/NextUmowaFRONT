import Sidebar from '../components/SideBar';
import MainSection from '../components/MainSection';
import ButtonPanel from '../components/ButtonPanel';

export default function Home() {
  return (
    <div className="main-page">
      <div className="content">
        <Sidebar />
        <MainSection />
        <ButtonPanel />
      </div>
    </div>
  );
}