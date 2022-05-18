import React from 'react';
import "../styles/Footer.css";
const Footer = () => {
    return (
        <div className="footer mt-10">
             <div className="container">
                 <div className="col5">
                     <h1>
                         Бидний тухай
                     </h1>
                     <h2>
                         Түгээмэл асуулт, хариулт
                     </h2>
                     <h2>
                         Үйлчилгээний нөхцөл
                     </h2>
                     <h2>
                         Аюулгүй байдал, нууцлал
                     </h2>
                 </div>
                 <div className="col5">
                  <h1>Холбоо барих</h1><h2>7707-1907</h2><h2>info@ebazaar.mn</h2><h1>Хаяг</h1>
                         <h2>Сэнтрал тауэр, 15 давхар, 8-р хороо</h2><h2>Сүхбаатар дүүрэг, Улаанбаатар</h2>
                 </div>
                 <div className="col5">
                     <h1>
                         Биднийг дагаарай
                     </h1>
                 </div>
             </div>
        </div>
    );
};

export default Footer;