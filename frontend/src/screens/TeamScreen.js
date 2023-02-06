import React from 'react';
import MemberCard from '../components/MemberCard';
import './TeamScreen.css';

export default function TeamScreen() {
  return (
    <div id="team">
      <div id="team-message-top">
        <p>
          Without bonding and coordination, every project is a failure, Look at
          who makes KICKSUP great. ;)
        </p>
      </div>
      <div id="team-members">
        <MemberCard
          name="Zidane"
          position="Leadership & Management"
          imgUrl="zidane.jpg"
          socials={['linkedin', 'medium', 'facebook']}
        />
        <MemberCard
          name="Toni Kroos"
          position="Product Developer"
          imgUrl="tonikroos.jpg"
          socials={['linkedin', 'medium']}
        />
        <MemberCard
          name="Iker Casillas"
          position="Marketing Strategy"
          imgUrl="ikercasillas.jpg"
          socials={['medium']}
        />
        <MemberCard
          name="James"
          position="Product Designer"
          imgUrl="james.jpg"
          socials={['medium', 'nba', 'behance']}
        />
        <MemberCard
          name="Cristiano"
          position="Financial Operations"
          imgUrl="cristiano.jpg"
          socials={['linkedin', 'facebook']}
        />
      </div>
      <div id="team-message-bottom">
        <p>and You! ;)</p>
      </div>
    </div>
  );
}
