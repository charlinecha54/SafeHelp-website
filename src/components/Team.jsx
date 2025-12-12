import React from 'react';
import './Team.css';

const teamMembers = [
    { name: 'CHARLINE', role: 'UI/UX Designer & Frontend Developer', img: '/assets/charline.png' },
    { name: 'PAUL', role: 'Backend Developer', img: '/assets/paul.png' },
    { name: 'YANIS', role: 'Full-Stack Developer & CICD', img: '/assets/yanis.png' },
];

const Team = () => {
    return (
        <section id="team" className="section team-section">
            <div className="container">
                <h2 className="title">L'équipe derrière SafeHelp</h2>
                <p className="subtitle">Des étudiants passionnés par l'innovation et la sécurité.</p>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-img-wrapper">
                                <img src={member.img} alt={member.name} className="team-avatar" />
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
