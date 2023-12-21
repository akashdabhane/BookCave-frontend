import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
import BookInfo from "./pages/BookInfo";
import AboutApp from "./pages/AboutApp";
import SearchBook from "./pages/SearchBook";
import OrderHistory from "./pages/OrderHistory";
import { useState } from "react";
import { LoginContext } from '../src/contexts/LoginContext'
import ContactUs from "./pages/ContactUs";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [phoneGlobal, setPhoneGlobal] = useState('');
  const [userIdGlobal, setUserIdGlobal] = useState('');
  const [publisherGlobal, setPublisherGlobal] = useState(false);


  return (
    <div className="App ">
      <BrowserRouter>
        <LoginContext.Provider value={{ setPhoneGlobal, setUserIdGlobal, setPublisherGlobal, publisherGlobal }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-app" element={<AboutApp />} />
            <Route path="/book-info/:id" element={<BookInfo />} />
            <Route path="/search" element={<SearchBook />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/forget-password" element={<ForgetPassword />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
