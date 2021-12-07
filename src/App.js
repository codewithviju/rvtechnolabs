import { Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
function App() {
  return (
    <>
      <Header sitetitle="Welcome To Rv Technolabs" sitedesc="We Will Make Your Dreams Came True.." />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact heading="Ask Your Questions.." />} />
        <Route path="/about-us" element={<About title="Get to know us better." shortdesc="We truly care about our products. We are dedicated to providing
              you with the best IT solutions of your requirements." longdesc="Our simplistic process keeps you involved at every stage. We
              brainstorm with you to understand your requirements and ensure
              that they are met. Combined with your ideas and our creative
              inputs we come out with the best design for your needs and
              requirements." />} />
        <Route path="/services" element={<Services heading="We Provide Diffrent Services For You.." />} />
      </Routes>
      <Footer footercontent="© 2021 Rv Technolabs - All Rights Reserved" />
    </>
  );
}

export default App;
