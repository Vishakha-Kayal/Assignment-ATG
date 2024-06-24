import useWindowWidth from "./hooks/useWindowWidth";
import Navbar from "./components/Navbar";
import LoggedIn from "./components/LoggedIn"
import IntroductionScreen from "./components/IntroductionScreen";
import Android from "./components/Android";
import HeroContent from "./components/Hero/HeroContent";

function App() {
  const width = useWindowWidth();
  const isMobile = width <= 650;

  {
    if (!isMobile) {
      return (
        <>
          <main className="w-full h-full pt-[0.3rem]">
            <Navbar loggedin={false}/>
            <IntroductionScreen />
            <div className="w-[80%] h-full m-auto pt-6">
              <HeroContent loggedIn={false}/>
            </div>
            {/* <LoggedIn/> */}
          </main>
        </>
      );
    } else {
      return (
        <>
          <main className="w-full h-screen pt-[0.3rem] relative z-0">
            <Android loggedin={false}/>
          </main>
        </>
      );
    }
  }
}

export default App;


