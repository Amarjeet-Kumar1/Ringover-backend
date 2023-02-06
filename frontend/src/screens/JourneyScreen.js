import React from 'react';
import './JourneyScreen.css';

export default function JourneyScreen() {
  return (
    <div id="journey-container">
      <div
        id="journey-poster"
        style={{
          backgroundImage: 'url(/images/grasspic.jpg)',
        }}
      >
        <div id="journey-heading">
          <p>THE JOURNEY</p>
        </div>
      </div>
      <div id="journey-description">
        <div id="journey-list-container">
          <div className="journey-list">
            <div className="circle"></div>
            <p className="list-heading">THE ROOTS</p>
            <p className="list-desc">
              Our entire life when we shop, we are limited by choices that are
              there in a store. We are often on the side where we buy our
              favourite coloured shoes made by someone else but what if we
              designed it? What if we could involve in the making of a shoe we
              want to buy? This little thought sprouted to become what we are
              today, KICKSUP! :)
            </p>
          </div>
          <div className="journey-list">
            <div className="circle"></div>
            <p className="list-heading">CHAPTER I</p>
            <p className="list-desc">
              Understanding the trends in the industry and what the users think
              when they buy were our top priorities before we moved further in
              the building. After weeks of fruitful research, we stepped into
              the user's shoes and look at what we plan to do. It's a great joy
              for the users if they are involved in the making. We're heading
              into an era of technology and people prefer online shopping to
              shopping in an outlet.
            </p>
          </div>
          <div className="journey-list">
            <div className="circle"></div>
            <p className="list-heading">CHAPTER II</p>
            <p className="list-desc">
              Every milestone begins with a single step and before KICKSUP
              sprouted, the team manufactured in small scale with two users a
              month. This experience was crucial to our brand as this is our
              first practical experience. Interacting with the users was the
              best thing ever. The positive reviews and support from people
              motivated us to push our limits further.
            </p>
          </div>
          <div className="journey-list">
            <div className="circle"></div>
            <p className="list-heading">KICKSUP</p>
            <p className="list-desc">
              Here we are, made a perfect platform for you to involve in the
              making of a shoe you want to buy! We have evolved ever since we
              started out. We wish to help you more and make KICKSUP a bigger
              team. Design your shoe and be a part of our journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
