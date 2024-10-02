
import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div className="dashboard bg-black min-h-screen">
      <Navbar/>
      <div class="flex items-center justify-center text-white min-h-screen ">
        <h1 class="text-5xl ">This is a Dashboard of a clothing store</h1>
      </div>
    </div>
  );
}
