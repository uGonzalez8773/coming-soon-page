import logo from "./assets/logo.svg";
import mobilePhoto from "./assets/hero-mobile.jpg";
import desktopPhoto from "./assets/hero-desktop.jpg";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.svg";
import desktopBg from "./assets/bg-pattern-desktop.svg";
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
    <main
      className="bg-gradient-to-r from-white via-white to-FFF4F4 bg-opacity-90 md:grid md:grid-cols-7
  "
    >
      <article className="flex flex-col md:col-span-3 md:col-start-5 ">
        <img src={logo} alt="logo company" className="p-6 w-36 md:w-44 md:absolute md:left-[10%] md:top-5"/>
        <picture>
          <source media="(min-width:480px)" srcSet={desktopPhoto} />
          <img
            src={mobilePhoto}
            alt="main background"
            className="w-screen md:h-screen"
          />
        </picture>
      </article>
      <section className="flex flex-col items-centers md:row-start-1 md:col-span-4 md:h-screen md:justify-center gap-5 "
      style={{ backgroundImage: `url(${desktopBg})` }}>
        <div className="font-mainFont flex flex-col mt-10 md:ml-40 md:mr-32">
          <h1 className="text-primaryColor font-light text-[40px] tracking-widest flex flex-col text-center md:text-left md:text-7xl">
            WE&apos;RE
            <span className="text-secondColor font-semibold -mt-4 md:mt-1">
              COMING
            </span>
            <span className="text-secondColor font-semibold -mt-4 md:mt-1">
              SOON
            </span>
          </h1>
          <p className="text-sm text-primaryColor p-3 text-center leading-6 md:leading-8 w-screen md:w-fit md:text-left md:text-[15px] md:mt-4 md:p-0">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className="relative w-screen p-3 items-center text-center mb-16 md:w-7/12 md:p-0 md:ml-40 md:mr-32 md:mb-0">
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
              className="absolute -right-2 top-2 cursor-pointer md:-top-1 md:-right-7 "
            >
              <img src={arrow} alt="arrow input" className="w-28 md:w-32 md:h-24" />
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
