import { useRouter } from 'next/router';


export default function Sidebar2() {
  const router = useRouter();

  return (
    <aside className="sidebar2">
      <div className="section-header">Na dzisiaj</div>
      <div className="menu-item">Lista kontaktów</div>
      <div className="menu-item active">Lista spotkań</div>
      <div className="menu-item">Lista ofert</div>
      <div className="menu-item">Lista umów</div>
      <div className="menu-buttons">
        <button onClick={() => router.push('/utworz-umowy')} className="action-button">Na dzisiaj</button>
        <button onClick={() => router.push('/lista-umow')} className="action-button">Na jutro</button>
      </div>
    </aside>
  );
}