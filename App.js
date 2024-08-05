// import logo from './logo.svg';
import "./App.css";
import Todo from "./assignment-6/Todo";
import Gallery from "./assignment-6/Gallary";
import Contact from "./assignment-6/Contact";
import ShoppingCart from "./assignment-6/ShoppingCart";
import Login from "./assignment-7/Login";
import Register from "./assignment-7/Register";
import SurveyForm from "./assignment-7/Survey";
import SearchFilter from "./assignment-7/SearchFilter";
import SettingsForm from "./assignment-7/SettingForm";

function App() {
  return (

    <>
      <Todo/>
      <hr/>
      <Gallery/>
      <hr/>
      <Contact/>
      <hr/>
      <ShoppingCart/>
      <hr/>
      <Register/>
      <hr/>
      <Login/>
      <hr/>
      <SurveyForm/>
      <hr/>
      <SearchFilter/>
      <hr/>
      <SettingsForm/>
    </>
  );
}

export default App;
