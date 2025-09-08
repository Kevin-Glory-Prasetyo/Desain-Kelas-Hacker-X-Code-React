import React from 'react';

// Import gambar mentor
import man1 from '../assets/img/man (1).jpg';
import kurniawan1 from '../assets/img/kurniawan1.jpg';
import man2 from '../assets/img/man (2).jpg';
import man3 from '../assets/img/man (3).jpg';
import man4 from '../assets/img/man (4).jpg';


const mentorData = [
    { img: man1, name: "Master Kurniawan" },
    { img: kurniawan1, name: "Master Kurniawan" },
    { img: man2, name: "Master Kurniawan" },
    { img: man4, name: "Master Kurniawan" },
    { img: man3, name: "Master Kurniawan" }
];

const Mentors = () => {
    return (
        <section className="mentor-section">
            <div className="section-header">
                <h2>Mentor</h2>
                <p>Kami menghadirkan pengajar terbaik dari industri untuk memberikan Anda keterampilan praktis yang mutakhir</p>
            </div>
            <div className="mentor-container">
                {mentorData.map((mentor, index) => (
                    <div key={index} className="mentor-card">
                        <img src={mentor.img} alt="Foto Mentor" />
                        <div className="card-content">
                            <div className="mentor-info">
                                <h3>{mentor.name} <i className="fas fa-check-circle verified-icon"></i></h3>
                                <p className="experience">Praktisi & Scientis | 10+ Years Of Experience</p>
                            </div>
                            <div className="card-footer">
                                <span className="course-tag">Course</span>
                                <span className="rating">★ 4.8</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Mentors;