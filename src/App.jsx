import logo from "./assets/logo.svg";
import mobilePhoto from "./assets/hero-mobile.jpg";
import desktopPhoto from "./assets/hero-desktop.jpg";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.svg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);
    setShowError(!isValid);

    if (isValid) {
      console.log("Correo electrónico válido:", email);
    } else {
      console.log("Correo electrónico no válido");
    }
  };

  return (
    <main className="bg-gradient-to-r from-white via-white to-FFF4F4 bg-opacity-90">
      <article className="flex flex-col">
        <img src={logo} alt="logo company" className="p-6 w-36" />
        <picture>
          <source media="(min-width:480px)" srcSet={desktopPhoto} />
          <img src={mobilePhoto} alt="main background" className="w-screen" />
        </picture>
      </article>
      <section className="flex flex-col items-center">
        <div className="font-mainFont flex flex-col mt-10">
          <h1 className="text-primaryColor font-light text-[40px] tracking-widest flex flex-col text-center">
            WE&apos;RE
            <span className="text-secondColor font-semibold -mt-4">COMING</span>
            <span className="text-secondColor font-semibold -mt-4">SOON</span>
          </h1>
          <p className="text-sm text-primaryColor p-3 text-center leading-6 w-screen">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className="relative w-screen p-3 items-center text-center mb-16 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className={`border-2 rounded-full w-full h-14 border-primaryColor opacity-60 p-3 ${
                isValidEmail ? "" : "border-red-700"
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            {showError && !isValidEmail && (
              <img
                src={error}
                alt="error icon"
                className="absolute right-20 top-1/2 transform -translate-y-1/2 w-7 h-7"
              />
            )}
          </div>
          <button
            type="submit"
            className="absolute -right-2 top-2 cursor-pointer"
          >
            <img src={arrow} alt="arrow input" className="w-28" />
          </button>
        </form>
          {showError && !isValidEmail && (
            <p className="text-thirdColor mt-2 ml-4 font-mainFont text-sm text-start">
              Please provide a valid email
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
