import Body from "./components/Body";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const App = () => {
  // const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  // const handleToggleDarkMode = () => {
  //   setIsDarkModeEnabled((prev) => !prev);
  // };
  return (
    <div className=" bg-gray-100">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;

{
  /* <div className={isDarkModeEnabled ? "dark-mode" : ""}>
  <button onClick={handleToggleDarkMode}>
    {isDarkModeEnabled ? "Disable" : "Enable"} Dark Mode
  </button>
</div>; */
}
