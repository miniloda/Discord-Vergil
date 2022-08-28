import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import MenuPane from './MenuPane';
import MainPane from './MainPane';
export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <MenuPane />
      <MainPane />
    </div>
  )
}
