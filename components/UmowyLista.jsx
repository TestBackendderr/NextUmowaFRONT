import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UmowyLista = ({ initialUmowy = [] }) => {
  const [umowy, setUmowy] = useState(initialUmowy);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUmowa, setEditedUmowa] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    if (initialUmowy.length === 0) {
      axios.get('/api/umowy')
        .then(res => setUmowy(res.data))
        .catch(err => console.error('Błąd podczas ładowania umów:', err));
    }
  }, [initialUmowy]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedUmowa(umowy[index]);
  };

  const handleChange = (e, key) => {
    setEditedUmowa({ ...editedUmowa, [key]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`/api/umowy/${id}`, editedUmowa);
      const updated = [...umowy];
      updated[editIndex] = editedUmowa;
      setUmowy(updated);
      setEditIndex(null);
    } catch (err) {
      console.error('Błąd zapisu:', err);
    }
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditedUmowa({});
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUmowy = [...umowy].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key] || '';
    const valB = b[sortConfig.key] || '';
    if (sortConfig.direction === 'asc') {
      return valA > valB ? 1 : -1;
    }
    return valA < valB ? 1 : -1;
  });

  const filteredUmowy = sortedUmowy.filter(umowa =>
    Object.values(umowa).some(val =>
      val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="umowy-lista">
      <h2>Lista Umów</h2>
      <input
        type="text"
        placeholder="Szukaj..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {filteredUmowy[0] && Object.keys(filteredUmowy[0]).map(key => (
                <th key={key} onClick={() => handleSort(key)}>
                  {key}
                  {sortConfig.key === key && (
                    <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {filteredUmowy.map((umowa, index) => (
              <tr key={umowa.id}>
                {Object.keys(umowa).map(key => (
                  <td key={key}>
                    {editIndex === index ? (
                      <input
                        value={editedUmowa[key] || ''}
                        onChange={(e) => handleChange(e, key)}
                      />
                    ) : (
                      umowa[key]
                    )}
                  </td>
                ))}
                <td>
                  {editIndex === index ? (
                    <>
                      <button onClick={() => handleSave(umowa.id)}>Zapisz</button>
                      <button onClick={handleCancel}>Anuluj</button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(index)}>Edytuj</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UmowyLista;