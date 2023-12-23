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
import PrivateProtectRoute from "./PrivateProtectRoute/PrivateProtectRoute";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [phoneGlobal, setPhoneGlobal] = useState(null);
  const [userIdGlobal, setUserIdGlobal] = useState(null);
  const [publisherGlobal, setPublisherGlobal] = useState(false);

  return (
    <div className="App ">
      <BrowserRouter>
        <LoginContext.Provider value={{ setPhoneGlobal, setUserIdGlobal, setPublisherGlobal, setIsLogin, publisherGlobal, userIdGlobal, phoneGlobal, isLogin }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />

            <Route path="/" element=
              {
                <PrivateProtectRoute>
                  <Home />
                </PrivateProtectRoute>} />

            <Route path="/about-app" element={
              <PrivateProtectRoute>
                <AboutApp />
              </PrivateProtectRoute>} />

            <Route path="/book-info/:id" element={
              <PrivateProtectRoute>
                <BookInfo />
              </PrivateProtectRoute>} />

            <Route path="/search" element={
              <PrivateProtectRoute>
                <SearchBook />
              </PrivateProtectRoute>} />

            <Route path="/order-history" element={
              <PrivateProtectRoute>
                <OrderHistory />
              </PrivateProtectRoute>} />

            <Route path="/contact-us" element={
              <PrivateProtectRoute>
                <ContactUs />
              </PrivateProtectRoute>} />

            <Route path="/profile" element={
              <PrivateProtectRoute>
                <Profile />
              </PrivateProtectRoute>} />

            <Route path="/my-profile" element={
              <PrivateProtectRoute>
                <MyProfile />
              </PrivateProtectRoute>} />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
