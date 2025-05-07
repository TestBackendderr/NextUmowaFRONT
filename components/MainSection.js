export default function MainSection() {
    return (
      <main className="main-section">
        <div className="section-header">Lista Spotkań</div>
        <div className="meeting-content">
          <div className="meeting-item">
            Firma A.B.C. s.p.z.o.o<br />
            NIP: 34533453452532<br />
            Adres: Lwowska 10 - 128
          </div>
          <div className="meeting-details">
            Data: 10.05.2025<br />
            Czas: 12:00<br />
            Adres: Lwowska 10<br />
            Handlowiec: Handlowiec
          </div>
          <div className="meeting-actions">
            <button className="action-button">Edytuj</button>
            <button className="action-button">Oferte</button>
          </div>
        </div>
      </main>
    );
  }