import Header from "./Components/Header/Header";
import { Feed } from "./Components/PostCard/Feed";
import SideBar from "./Components/SideBar/SideBar";

function App() {

  return (
    <main>
      <Header />
      <div className="flex justify-between gap-4">
        <Feed />
        <SideBar />
      </div>
    </main>
  )
}

export default App;
