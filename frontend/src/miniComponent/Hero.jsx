import React from "react";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          blanditiis ullam neque illum modi libero corrupti hic fugit
          necessitatibus ratione enim adipisci magnam id sunt eum vel ea
          recusandae cupiditate debitis voluptas incidunt, totam dolorem error
          distinctio! Ex pariatur eligendi aperiam odio, fugit incidunt minus a
          at reprehenderit excepturi corrupti doloribus ab consequuntur
          molestiae totam, itaque quibusdam blanditiis expedita placeat porro
          sed. Ipsa harum alias quaerat et, sit qui quidem praesentium
          blanditiis perferendis ratione error incidunt necessitatibus delectus
          earum, excepturi reiciendis, animi minima amet voluptas dolorem! Iusto
          mollitia ipsam quisquam vero accusantium, natus quidem 
        </p>
        <Link to={"/donate"} className="btn">Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero"  />
      </div>
    </section>
  );
};

export default Hero;
