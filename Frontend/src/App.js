import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../redux/store";
import HomeScreen from "./Components/users/HomeScreen";
import Navbar from "./Components/users/Navbar"
import Footer from "./Components/users/Footer";
import { loginSuccess } from "../redux/actions/authAction";

const App = () => {
  useEffect(() => {
    // Check for token in localStorage on page load
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      console.log('Token found in localStorage:', storedToken);
      // Dispatch an action to update Redux store with the token
      store.dispatch(loginSuccess(storedToken));
    }
  }, []); // Ensure that the effect runs only once when the component mounts

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Provider store={store}>
      <>
        <Navbar toggleModal={toggleModal} />
        <div className="pt-12">
          <HomeScreen showModal={showModal} toggleModal={toggleModal} />
        </div>
        <Footer />
      </>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App/>);
export default App;