import React, { useState } from 'react';


// Data logo bisa diletakkan di luar komponen karena tidak berubah
const tabData = {
    "Training": ["mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png"],
    "Alumni": ["mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png"],
    "Seminar": ["mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png"],
    "Company Partner": ["mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client1.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png"],
    "Company Friends": ["mitra/client1.png", "mitra/client2.png", "mitra/client4.png", "mitra/client5.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png"],
    "Media Report": ["mitra/client3.png", "mitra/client2.png", "mitra/client5.png", "mitra/client6.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png", "mitra/client1.png", "mitra/client6.png"],
    "Country": ["mitra/client4.png", "mitra/client5.png", "mitra/client6.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png", "mitra/client2.png", "mitra/client4.png", "mitra/client3.png"]
};

// Daftar tab diambil dari kunci objek tabData
const tabCategories = Object.keys(tabData);

function ClientPartnerSection() {
    // State untuk melacak tab mana yang aktif
    const [activeTab, setActiveTab] = useState("Media Report");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="client-partner" id='Our Client'> 
            <h2>Client and Partner</h2>
            <p>
                Kami sudah bekerja sama dengan berbagai klien dan mitra mulai dari universitas, perusahaan baik dalam negeri maupun luar negeri.
            </p>

            <div className="tabs">
                {tabCategories.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <h3>{`Klien yang pernah mengikuti ${activeTab} di XCODE`}</h3>

            <div className="logos-section">
                <div className="logos-container">
                    <div className="logos-grid">
                        {tabData[activeTab].map((logoSrc, index) => (
                            <div className="logo-box" key={index}>
                                <img src={logoSrc} alt={`${activeTab} Logo ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientPartnerSection;