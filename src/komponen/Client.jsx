import React, { useState } from 'react';

// Data logo
const tabData = {
    "Training": ["mitra/pertahanan.png", "mitra/mirota.png", "mitra/sydeco.png", "mitra/kominfo.png"
        ,"mitra/bireuen.png","mitra/KPK.png","mitra/DQ.png","mitra/amikom.png","mitra/univ1.png","mitra/univ2.png"
        ,"mitra/haribi.png","mitra/tas.png","mitra/suhu.png","mitra/kominfopinrang.png","mitra/pertahanan.png"
        ,"mitra/fac.png","mitra/mapi.png","mitra/mamikos.png","mitra/metro.png","mitra/itb.png","mitra/hokben.png"
    ],
    "Alumni": ["mitra/img/client_alumni01.png", "mitra/img/client_alumni02.png", "mitra/img/client_alumni03.png", "mitra/img/client_alumni04.png","mitra/img/client_alumni05.png","mitra/img/client_alumni06.png","mitra/img/client_alumni07.png","mitra/img/client_alumni08.png"],
    "Seminar": ["mitra/img/seminar1.png", "mitra/img/seminar2.png", "mitra/img/seminar3.png","mitra/img/seminar4.png","mitra/img/seminar5.png"
        ,"mitra/img/seminar6.png","mitra/img/seminar7.png","mitra/img/seminar8.png","mitra/img/seminar9.png","mitra/img/seminar10.png","mitra/img/seminar11.png","mitra/img/seminar12.png","mitra/img/seminar13.png","mitra/img/seminar14.png"
    ],
    "Company Partner": ["mitra/img/client_companypartner01.png", "mitra/img/client_companypartner02.png", "mitra/img/client_companypartner03.png", "mitra/img/client_companypartner04.png"
        ,"mitra/img/client_companypartner05.png","mitra/img/client_companypartner06.png","mitra/img/client_companypartner07.png","mitra/img/client_companypartner08.png","mitra/img/client_companypartner09.png"
    ],
    "Company Friends": ["mitra/img/client_companyfriend01.png", "mitra/img/client_companyfriend02.png", "mitra/img/client_companyfriend03.png", "mitra/img/client_companyfriend04.png"
        ,"mitra/img/client_companyfriend05.png","mitra/img/client_companyfriend06.png","mitra/img/client_companyfriend07.png","mitra/img/client_companyfriend08.png","mitra/img/client_companyfriend09.png","mitra/img/client_companyfriend10.png"
    ],
    "Media Report": ["mitra/img/mediareport1.png", "mitra/img/mediareport2.png", "mitra/img/mediareport3.png", "mitra/img/mediareport4.png","mitra/img/mediareport5.png","mitra/img/mediareport6.png","mitra/img/mediareport7.png","mitra/img/mediareport8.png"
        ,"mitra/img/mediareport9.png","mitra/img/mediareport10.png","mitra/img/mediareport11.png","mitra/img/mediareport12.png","mitra/img/mediareport13.png","mitra/img/mediareport14.png","mitra/img/mediareport15.png"

    ],
    "Country": ["mitra/img/client_country01.png", "mitra/img/client_country02.png", "mitra/img/client_country03.png", "mitra/img/client_country04.png"]
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
