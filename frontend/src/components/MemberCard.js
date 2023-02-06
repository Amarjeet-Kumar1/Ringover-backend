import React from 'react';
import './MemberCard.css';

export default function MemberCard(props) {
  const { name, position, imgUrl, socials } = props;
  return (
    <div className="member-card">
      <div className="member-image">
        <img src={`/images/members/${imgUrl}`} alt={name} />
      </div>
      <div className="member-details">
        <p className="member-name">{name}</p>
        <p className="member-position">{position}</p>
      </div>
      <div className="member-socials">
        {socials.map((social) => (
          <div className="socials-image" key={social}>
            <img src={`/images/socials/${social}.png`} alt={social} />
          </div>
        ))}
      </div>
    </div>
  );
}
