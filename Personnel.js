import React, { useState } from 'react';
import './Personnel.css'; // Подключаем стили для компонента

const Personnel = () => {
  // Состояние для данных персонала
  const [personnelData, setPersonnelData] = useState([
    { id: 1, name: 'Іван Іванов', position: 'Доцент', rank: 'Капітан' },
    { id: 2, name: 'Петро Петренко', position: 'Старший викладач', rank: 'Лейтенант' },
    { id: 3, name: 'Марія Марченко', position: 'Асистент', rank: 'Сержант' },
  ]);

  // Состояние для формы
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    rank: '',
  });

  const [editingId, setEditingId] = useState(null);  // Для отслеживания редактирования

  // Обработчик изменения данных формы
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Добавление нового сотрудника
  const handleAdd = (e) => {
    e.preventDefault();
    if (editingId) {
      // Обновление существующего
      setPersonnelData(
        personnelData.map(person =>
          person.id === editingId ? { ...person, ...formData } : person
        )
      );
    } else {
      // Добавление нового сотрудника
      const newPerson = {
        id: Date.now(),
        ...formData
      };
      setPersonnelData([...personnelData, newPerson]);
    }
    setFormData({ name: '', position: '', rank: '' });
    setEditingId(null); // Сбросим редактирование
  };

  // Редактирование сотрудника
  const handleEdit = (id) => {
    const person = personnelData.find((person) => person.id === id);
    setFormData({ name: person.name, position: person.position, rank: person.rank });
    setEditingId(id);  // Устанавливаем id редактируемого сотрудника
  };

  // Удаление сотрудника
  const handleDelete = (id) => {
    setPersonnelData(personnelData.filter((person) => person.id !== id));
  };

  return (
    <div className="personnel-container">
      <h1>Особовий склад Кафедри</h1>

      {/* Форма для добавления и редактирования данных */}
      <form onSubmit={handleAdd} className="personnel-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ім'я"
          required
        />
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Посада"
          required
        />
        <input
          type="text"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          placeholder="Звання"
          required
        />
        <button type="submit" className="submit-btn">
          {editingId ? 'Зберегти' : 'Додати'}
        </button>
      </form>

      {/* Таблица с персоналом */}
      <table className="personnel-table">
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Посада</th>
            <th>Звання</th>
            <th>Редагувати</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {personnelData.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.position}</td>
              <td>{person.rank}</td>
              <td>
                <button onClick={() => handleEdit(person.id)} className="edit-btn">
                  Редагувати
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(person.id)} className="delete-btn">
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Personnel;
