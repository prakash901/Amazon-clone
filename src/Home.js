import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Business Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="The Second Proudct: hey i am second"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Third Product: lorem ipsum"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4"
          title="The Fourth product: fourth one"
          price={11.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="5"
          title="The Fifth: its fifth"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Sixth Proudct: sixth product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
