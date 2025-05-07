import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  return (
    
    <aside className="sidebar">
      
      <div className="menu-item">Lista kontaktów</div>
      <div className="menu-item active">Lista spotkań</div>
      <div className="menu-item">Lista ofert</div>
      <div className="menu-item">Lista umów</div>
      <div className="menu-buttons">
        <button onClick={() => router.push('/utworz-umowy')} className="action-button">Utwórz Umowę</button>
        <button onClick={() => router.push('/lista-umow')} className="action-button">Lista Umów</button>
      </div>
    </aside>
  );
}