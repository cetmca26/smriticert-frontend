import React from 'react'
import Hero from "./pages/shared/Hero";
import Blog from "./pages/shared/TechnologyOverview";
import Features from "./pages/shared/Features";
import Stats from "./pages/shared/Stats";
import Testimonial from "./pages/shared/Testimonial";
import CallToAction from "./pages/shared/CallToAction";
import Footerc from "./pages/shared/Footerc";
import Headerc from "./pages/shared/Headerc";


function Landing() {
 
  return (
    <>
     
    <main className="space-y-40 mb-40">
    <div className="bg-white dark:bg-gray-950">
    <Headerc/>
		<Hero/>
    
   
		<Features/>
		<Stats/>
		<Testimonial/>
		<CallToAction/>
		<Blog/>
    <Footerc/>

    </div>
    </main>
   
    </>
  )
}

export default Landing