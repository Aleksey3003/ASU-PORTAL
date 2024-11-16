import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Контакти</h1>
      <p>Адрес: ул. Корабельная, 6</p>
      <p>Начальник факультету інформаційних технологій: (044) 256-22-35 Полковник Черня </p>

      <h2>Наша локация</h2>

      {/* Встраиваем карту через iframe */}
      <iframe 
         src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1731686007367!5m2!1sru!2sua"
        width="600" 
        height="450" 
        style={{ border: 'none' }}  
        allowFullScreen="" 
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Contact;
