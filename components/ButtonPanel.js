import { useRouter } from 'next/router';


export default function ButtonPanel() {
  const router = useRouter();

  return (
    <div className="button-panel">
      <div className="panel-header">NA DZIŚAJ</div>
      <div className="meetings">
        <div className="meeting">Spotkanie z Telecentru 08:30 - Mierzwice 30d</div>
        <div className="meeting">Spotkanie z stotorka 10:30 - Łowicz 30</div>
        <div className="meeting">Rozmowa z Zabka 12:00 - Łowicz 21</div>
        <div className="meeting">Podpisanie z Biedronka 12:30 - Natulowicza 28</div>
      </div>
      <div className="panel-actions">
        <button className="action-button">Dziśaj</button>
        <button className="action-button">Jutro</button>
        <button className="action-button">Pojutrze</button>
        <button className="action-button">Plus 3 dni</button>
      </div>
    </div>
  );
}