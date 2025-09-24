import React, { useState } from 'react';

// Data logo
const tabData = {
    "Training": ["src/assets/img/pertahanan.png", "src/assets/img/mirota.png", "src/assets/img/sydeco.png", "src/assets/img/kominfo.png"
        ,"src/assets/img/bireuen.png","src/assets/img/KPK.png","src/assets/img/DQ.png","src/assets/img/amikom.png","src/assets/img/univ1.png","src/assets/img/univ2.png"
        ,"src/assets/img/haribi.png","src/assets/img/tas.png","src/assets/img/suhu.png","src/assets/img/kominfopinrang.png","src/assets/img/pertahanan.png"
        ,"src/assets/img/fac.png","src/assets/img/mapi.png","src/assets/img/mamikos.png","src/assets/img/metro.png","src/assets/img/itb.png","src/assets/img/hokben.png"
    ],
    "Alumni": ["src/assets/img/client_alumni01.png", "src/assets/img/client_alumni02.png", "src/assets/img/client_alumni03.png", "src/assets/img/client_alumni04.png","src/assets/img/client_alumni05.png","src/assets/img/client_alumni06.png","src/assets/img/client_alumni07.png","src/assets/img/client_alumni08.png"],
    "Seminar": ["src/assets/img/seminar1.png", "src/assets/img/seminar2.png", "src/assets/img/seminar3.png","src/assets/img/seminar4.png","src/assets/img/seminar5.png"
        ,"src/assets/img/seminar6.png","src/assets/img/seminar7.png","src/assets/img/seminar8.png","src/assets/img/seminar9.png","src/assets/img/seminar10.png","src/assets/img/seminar11.png","src/assets/img/seminar12.png","src/assets/img/seminar13.png","src/assets/img/seminar14.png"
    ],
    "Company Partner": ["src/assets/img/client_companypartner01.png", "src/assets/img/client_companypartner02.png", "src/assets/img/client_companypartner03.png", "src/assets/img/client_companypartner04.png"
        ,"src/assets/img/client_companypartner05.png","src/assets/img/client_companypartner06.png","src/assets/img/client_companypartner07.png","src/assets/img/client_companypartner08.png","src/assets/img/client_companypartner09.png"
    ],
    "Company Friends": ["src/assets/img/client_companyfriend01.png", "src/assets/img/client_companyfriend02.png", "src/assets/img/client_companyfriend03.png", "src/assets/img/client_companyfriend04.png"
        ,"src/assets/img/client_companyfriend05.png","src/assets/img/client_companyfriend06.png","src/assets/img/client_companyfriend07.png","src/assets/img/client_companyfriend08.png","src/assets/img/client_companyfriend09.png","src/assets/img/client_companyfriend10.png"
    ],
    "Media Report": ["src/assets/img/mediareport1.png", "src/assets/img/mediareport2.png", "src/assets/img/mediareport3.png", "src/assets/img/mediareport4.png","src/assets/img/mediareport5.png","src/assets/img/mediareport6.png","src/assets/img/mediareport7.png","src/assets/img/mediareport8.png"
        ,"src/assets/img/mediareport9.png","src/assets/img/mediareport10.png","src/assets/img/mediareport11.png","src/assets/img/mediareport12.png","src/assets/img/mediareport13.png","src/assets/img/mediareport14.png","src/assets/img/mediareport15.png"

    ],
    "Country": ["src/assets/img/client_country01.png", "src/assets/img/client_country02.png", "src/assets/img/client_country03.png", "src/assets/img/client_country04.png"]
};


// Deskripsi khusus untuk tiap tab
const tabDescriptions = {
    "Training": "Mereka yang telah mengikuti X-code Training kelas dari berbagai perusahaan, KPK, kementerian, diskominfo, kampus dan sebagainya.",
    "Alumni": "Informasi dari alumni X-Code training yang mereka mendapatkan pekerjaan di Bank, Pemda, KOMINFO & berbagai perusahaan.",
    "Seminar": "Clients kami untuk mengisi seminar dan workshop di Kampus-kampus Indonesia juga sekolah, mall dan perusahaan.",
    "Company Partner": "Kerja sama dengan berbagai perusahaan nasional maupun internasional sebagai mitra strategis X-Code.",
    "Company Friends": "Perusahaan sahabat yang mendukung kegiatan X-Code dalam berbagai bentuk kolaborasi.",
    "Media Report": "Berbagai media telah meliput kegiatan dan prestasi X-Code, baik di tingkat lokal maupun nasional.",
    "Country": "X-Code telah bekerja sama dengan mitra dari berbagai negara untuk mendukung pertumbuhan global."
};

// Daftar tab
const tabCategories = Object.keys(tabData);

function ClientPartnerSection() {
    const [activeTab, setActiveTab] = useState("Media Report");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="client-partner" id="Our Client">
            <h2>Client and Partner</h2>
            <p>
                Kami sudah bekerja sama dengan berbagai klien dan mitra mulai dari universitas, perusahaan baik dalam negeri maupun luar negeri.
            </p>

            <div className="tabs">
                {tabCategories.map((tab) => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? "active" : ""}`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <h3>{tabDescriptions[activeTab]}</h3>

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
