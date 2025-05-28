import React from 'react';
import './AppointmentCard.css';
interface AppointmentCardProps {
    type: string;
    time: string;
    icon: React.ReactNode;
    doctor:string;
    bg:string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ type, time, icon,doctor,bg }) => (
  <div className={`appointment-card ${bg}`}>
      <div className="icon">{icon}</div>
      <div>
        <div className="type">{type}</div>
        <div className="details">{time}</div>
        <div className="details">{doctor}</div>
      </div>
    </div>
);

export default AppointmentCard;