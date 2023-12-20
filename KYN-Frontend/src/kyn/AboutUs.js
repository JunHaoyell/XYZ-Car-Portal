import "./about.css";
import React from "react";

export function AboutUs (){
    return(

    <div id="about">
      <div class="container">

        <header class="section-header text-center mb-5 pb-2">
          <h3>About Us</h3>
          <p>We are KYN, Know Your Neighborhook! 
             Launched in September 2019, KYN App is the first product released by Team Iris.<br/>
              "Provide You more Convenient stores to allow you to make a shop comfortably!" </p>

        <div class="row about-cols">

          <div class="col-md-4 wow fadeInUp">
            <div class="about-col">
              <div class="img">
                <img src="img/about-mission.webp" alt="" class="img-fluid"/>
                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Mission</a></h2>
              <p class="text-center">
                sdfkjhsdfiusdlkfsakjdfhlsdjfsd fdlksd fas,dfslkdjsd.asjd ad hsfdjs
              </p>
            </div>
          </div>

          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="about-col">
              <div class="img">
                <img src="img/about-plan.webp" alt="" class="img-fluid"/>
                <div class="icon"><i class="ion-ios-list-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Plan</a></h2>
              <p class="text-center">
              sdfkjhsdfiusdlkfsakjdfhlsdjfsd fdlksd fas,dfslkdjsd.asjd ad hsfdjs
              </p>
            </div>
          </div>
          
          
 <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="about-col">
              <div class="img">
                <img src="img/about-vision.webp" alt="" class="img-fluid"/>
                <div class="icon"><i class="ion-ios-eye-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Vision</a></h2>
              <p class="text-center">
              sdfkjhsdfiusdlkfsakjdfhlsdjfsd fdlksd fas,dfslkdjsd.asjd ad hsfdjs               
              </p>
            </div>
          </div>

        </div>

      </header>
    </div>

    <section id="call-to-action" class="wow fadeIn">
      <div class="container text-center">
        <h3>Having Problems finding stores?</h3>
        <p class="text-center">
         With Iris Goal Tracker you can set and track your ideal products, track convenience, manage vandor, and lots more.      </p>
        <a class="cta-btn" href="/signup">Get Started</a>
      </div>
    </section></div>
    
    );
}
export default AboutUs;