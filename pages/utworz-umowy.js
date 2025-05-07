import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UtworzUmowy = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    handlowiec: '',
    dataPodpisania: '',
    numerUmowy: '',
    imieNazwisko: '',
    telefon: '',
    ulica: '',
    miejscowosc: '',
    kodPocztowy: '',
    powiat: '',
    wojewodztwo: '',
    rodzajKlienta: '',
    peselNip: '',
    dowod: '',
    tel2: '',
    kontaktowyTel: '',
    email: '',
    operatorOsd: '',
    czyWlascicielLicznika: '',
    adresImie: '',
    adresUlica: '',
    adresNrDomu: '',
    adresMiejscowosc: '',
    adresKodPocztowy: '',
    adresPowiat: '',
    adresWojewodztwo: '',
    czyPosiadaInstalacje: '',
    miejsceInstalacji: '',
    miUlica: '',
    miNrDomu: '',
    miMiejscowosc: '',
    miKod: '',
    miPowiat: '',
    miWojewodztwo: '',
    miejsceMontazu: '',
    lancuchy: '',
    licznikLokalizacja: '',
    zasiegInternetu: '',
    dwieKreski: '',
    odgromowa: '',
    numerDzialki: '',
    mocPrzylaczeniowa: '',
    zabezpieczenie: '',
    fazowa: '',
    taryfa: '',
    numerLicznika: '',
    numerPpm: '',
    cenaBrutto: '',
    pierwszaWplata: '',
    sposobPlatnosci1: '',
    czyJednaWplata: '',
    drugaWplata: '',
    sposobPlatnosci2: '',
    powierzchniaDomu: '',
    uwagiHandlowca: '',
    banerZamontowany: '',
    handlowiecWynagrodzenie: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    console.log('Отправляемые данные:', formData);
    try {
      const response = await axios.post('/api/umowy', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert(`Dane zapisane! ID umowy: ${response.data.id}`);
    } catch (error) {
      console.error('Błąd podczas zapisywania danych:', error.response ? error.response.data : error.message);
      alert('Błąd podczas zapisywania danych. Sprawdź консолę.');
    }
  };

  useEffect(() => {
    if (step === 3 && formData.adresImie && formData.adresUlica && formData.adresNrDomu && 
        formData.adresMiejscowosc && formData.adresKodPocztowy && formData.adresPowiat && 
        formData.adresWojewodztwo) {
      setFormData(prev => ({
        ...prev,
        miUlica: prev.miUlica || prev.adresUlica,
        miNrDomu: prev.miNrDomu || prev.adresNrDomu,
        miMiejscowosc: prev.miMiejscowosc || prev.adresMiejscowosc,
        miKod: prev.miKod || prev.adresKodPocztowy,
        miPowiat: prev.miPowiat || prev.adresPowiat,
        miWojewodztwo: prev.miWojewodztwo || prev.adresWojewodztwo
      }));
    }
  }, [step, formData.adresImie, formData.adresUlica, formData.adresNrDomu, 
      formData.adresMiejscowosc, formData.adresKodPocztowy, formData.adresPowiat, 
      formData.adresWojewodztwo]);

  return (
    <div className="utworz-umowy">
      {step === 1 && (
        <div className="form-step">
          <h2>Ogólne</h2>
          <label>Handlowiec:</label>
          <select name="handlowiec" value={formData.handlowiec} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="Bartek Test">Bartek Test</option>
            <option value="Marcin Test">Marcin Test</option>
          </select>

          <label>Data podpisania umowy:</label>
          <input type="date" name="dataPodpisania" value={formData.dataPodpisania} onChange={handleChange} />

          <label>Numer umowy:</label>
          <input type="text" name="numerUmowy" value={formData.numerUmowy} onChange={handleChange} />

          <div className="button-container">
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Dane Klienta</h2>
          <div className="sub-panel">
            <label>Imię i nazwisko:</label>
            <input type="text" name="imieNazwisko" value={formData.imieNazwisko} onChange={handleChange} />

            <label>Telefon:</label>
            <input type="text" name="telefon" value={formData.telefon} onChange={handleChange} />

            <label>Ulica:</label>
            <input type="text" name="ulica" value={formData.ulica} onChange={handleChange} />

            <label>Miejscowość:</label>
            <input type="text" name="miejscowosc" value={formData.miejscowosc} onChange={handleChange} />

            <label>Kod pocztowy:</label>
            <input type="text" name="kodPocztowy" value={formData.kodPocztowy} onChange={handleChange} />

            <label>Powiat:</label>
            <input type="text" name="powiat" value={formData.powiat} onChange={handleChange} />

            <label>Województwo:</label>
            <input type="text" name="wojewodztwo" value={formData.wojewodztwo} onChange={handleChange} />
          </div>

          <label>Rodzaj klienta:</label>
          <select name="rodzajKlienta" value={formData.rodzajKlienta} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="Osoba fizyczna">Osoba fizyczna</option>
            <option value="Działalność gospodarcza">Działalność gospodarcza</option>
          </select>

          <label>Pesel/NIP:</label>
          <input type="text" name="peselNip" value={formData.peselNip} onChange={handleChange} />

          <label>Seria i numer dowodu osobistego:</label>
          <input type="text" name="dowod" value={formData.dowod} onChange={handleChange} />

          <label>Numer telefonu:</label>
          <input type="text" name="tel2" value={formData.tel2} onChange={handleChange} />

          <label>Numer telefonu kontaktowy:</label>
          <input type="text" name="kontaktowyTel" value={formData.kontaktowyTel} onChange={handleChange} />

          <label>Adres email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Operator OSD:</label>
          <select name="operatorOsd" value={formData.operatorOsd} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="PGE Dystrybucja">PGE Dystrybucja</option>
            <option value="Tauron Dystrybucja">Tauron Dystrybucja</option>
            <option value="ENERGA Dystrybucja">ENERGA Dystrybucja</option>
            <option value="Enea Dystrybucja">Enea Dystrybucja</option>
            <option value="inny">inny</option>
            <option value="xxx">xxx</option>
          </select>

          <label>Czy właściciel instalacji jest właścicielem licznika?</label>
          <select name="czyWlascicielLicznika" value={formData.czyWlascicielLicznika} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </select>

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Adres korespondencyjny</h2>
          <label>Imię nazwisko / Dane firmy:</label>
          <input type="text" name="adresImie" value={formData.adresImie} onChange={handleChange} />

          <label>Ulica:</label>
          <input type="text" name="adresUlica" value={formData.adresUlica} onChange={handleChange} />

          <label>Nr domu:</label>
          <input type="text" name="adresNrDomu" value={formData.adresNrDomu} onChange={handleChange} />

          <label>Miejscowość:</label>
          <input type="text" name="adresMiejscowosc" value={formData.adresMiejscowosc} onChange={handleChange} />

          <label>Kod pocztowy:</label>
          <input type="text" name="adresKodPocztowy" value={formData.adresKodPocztowy} onChange={handleChange} />

          <label>Powiat:</label>
          <input type="text" name="adresPowiat" value={formData.adresPowiat} onChange={handleChange} />

          <label>Województwo:</label>
          <input type="text" name="adresWojewodztwo" value={formData.adresWojewodztwo} onChange={handleChange} />

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <h2>Istniejąca instalacja</h2>
          <label>Czy klient już posiada instalację?</label>
          <select name="czyPosiadaInstalacje" value={formData.czyPosiadaInstalacje} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </select>

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="form-step">
          <h2>Oferta</h2>
          <label>Miejsce instalacji:</label>
          <select name="miejsceInstalacji" value={formData.miejsceInstalacji} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="Adres klienta">Adres klienta</option>
            <option value="Adres korespondencyjny">Adres korespondencyjny</option>
            <option value="Inny">Inny</option>
          </select>

          <label>Ulica (miejsce instalacji):</label>
          <input type="text" name="miUlica" value={formData.miUlica} onChange={handleChange} />

          <label>Nr domu:</label>
          <input type="text" name="miNrDomu" value={formData.miNrDomu} onChange={handleChange} />

          <label>Miejscowość:</label>
          <input type="text" name="miMiejscowosc" value={formData.miMiejscowosc} onChange={handleChange} />

          <label>Kod pocztowy:</label>
          <input type="text" name="miKod" value={formData.miKod} onChange={handleChange} />

          <label>Powiat:</label>
          <input type="text" name="miPowiat" value={formData.miPowiat} onChange={handleChange} />

          <label>Województwo:</label>
          <input type="text" name="miWojewodztwo" value={formData.miWojewodztwo} onChange={handleChange} />

          <label>Miejsce montażu instalacji:</label>
          <select name="miejsceMontazu" value={formData.miejsceMontazu} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="Dach budynku mieszkalnego">Dach budynku mieszkalnego</option>
            <option value="Dach garażu">Dach garażu</option>
            <option value="Dach budynku gospodarczego">Dach budynku gospodarczego</option>
            <option value="Dach budynku rolnego">Dach budynku rolnego</option>
            <option value="Carport">Carport</option>
            <option value="Grunt">Grunt</option>
            <option value="Inne">Inne</option>
          </select>

          <label>Instalacja fotowoltaiczna podzielona na ilość łańcuchów:</label>
          <select name="lancuchy" value={formData.lancuchy} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="więcej">Więcej</option>
          </select>

          <label>Lokalizacja licznika:</label>
          <select name="licznikLokalizacja" value={formData.licznikLokalizacja} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="w budynku mieszkalnym w środku">w budynku mieszkalnym w środku</option>
            <option value="na zewnątrz">na zewnątrz</option>
            <option value="przed posesją">przed posesją</option>
            <option value="inne">inne</option>
          </select>

          <label>Czy klient posiada zasięg internetu w miejscu montażu falownika?</label>
          <select name="zasiegInternetu" value={formData.zasiegInternetu} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="wifi">WiFi</option>
            <option value="ethernet">Ethernet</option>
            <option value="nie">Nie</option>
          </select>

          <label>Czy w miejscu montażu falownika zasięg min. 2 kreski?</label>
          <select name="dwieKreski" value={formData.dwieKreski} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </select>

          <label>Czy klient posiada instalację odgromową?</label>
          <input type="text" name="odgromowa" value={formData.odgromowa} onChange={handleChange} />

          <label>Numer działki:</label>
          <input type="text" name="numerDzialki" value={formData.numerDzialki} onChange={handleChange} />

          <label>Moc przyłączeniowa:</label>
          <input type="text" name="mocPrzylaczeniowa" value={formData.mocPrzylaczeniowa} onChange={handleChange} />

          <label>Zabezpieczenie przedlicznikowe:</label>
          <input type="text" name="zabezpieczenie" value={formData.zabezpieczenie} onChange={handleChange} />

          <label>Ilu fazowa instalacja?</label>
          <select name="fazowa" value={formData.fazowa} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="jednofazowa">Jednofazowa</option>
            <option value="trójfazowa">Trójfazowa</option>
          </select>

          <label>Taryfa rozliczeniowa:</label>
          <input type="text" name="taryfa" value={formData.taryfa} onChange={handleChange} />

          <label>Numer licznika:</label>
          <input type="text" name="numerLicznika" value={formData.numerLicznika} onChange={handleChange} />

          <label>Numer PPM lub PPE:</label>
          <input type="text" name="numerPpm" value={formData.numerPpm} onChange={handleChange} />

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="form-step">
          <h2>Płatność</h2>
          <label>Cena brutto:</label>
          <input type="number" name="cenaBrutto" value={formData.cenaBrutto} onChange={handleChange} />

          <label>1. wpłata (kwota brutto):</label>
          <input type="number" name="pierwszaWplata" value={formData.pierwszaWplata} onChange={handleChange} />

          <label>Sposób płatności:</label>
          <select name="sposobPlatnosci1" value={formData.sposobPlatnosci1} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="przelew">Przelew</option>
            <option value="kredyt">Kredyt</option>
            <option value="leasing">Leasing</option>
            <option value="gotowka">Gotówka</option>
            <option value="prefinans">Prefinans</option>
          </select>

          <label>Brak 2. wpłaty, klient wpłaca wszystko w 1.?</label>
          <select name="czyJednaWplata" value={formData.czyJednaWplata} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </select>

          {formData.czyJednaWplata === "nie" && (
            <>
              <label>2. wpłata (kwota brutto):</label>
              <input type="number" name="drugaWplata" value={formData.drugaWplata} onChange={handleChange} />

              <label>Sposób płatności 2. wpłaty:</label>
              <select name="sposobPlatnosci2" value={formData.sposobPlatnosci2} onChange={handleChange}>
                <option value="">-- Wybierz --</option>
                <option value="przelew">Przelew</option>
                <option value="kredyt">Kredyt</option>
                <option value="leasing">Leasing</option>
                <option value="gotowka">Gotówka</option>
                <option value="prefinans">Prefinans</option>
              </select>
            </>
          )}

          <label>Powierzchnia domu (m²):</label>
          <input type="number" name="powierzchniaDomu" value={formData.powierzchniaDomu} onChange={handleChange} />

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={nextStep}>Dalej</button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div className="form-step">
          <h2>Uwagi</h2>
          <label>Uwagi handlowca:</label>
          <textarea name="uwagiHandlowca" value={formData.uwagiHandlowca} onChange={handleChange} />

          <label>Czy został zamontowany baner w miejscu montażu?</label>
          <select name="banerZamontowany" value={formData.banerZamontowany} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </select>

          <label>Handlowiec do wynagrodzenia:</label>
          <select name="handlowiecWynagrodzenie" value={formData.handlowiecWynagrodzenie} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="Bartek Test">Bartek Test</option>
            <option value="Marcin Test">Marcin Test</option>
          </select>

          <div className="button-container">
            <button className="btn-back" onClick={prevStep}>Wróć</button>
            <button onClick={handleSubmit}>Zakończ</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UtworzUmowy;