import React from 'react';
import "../styles/Category.css";
import all from '../assets/all.svg'
const Category = () => {
    return (
        <div id="categories">
           <div className="container">
               <div className="col1">
                   <h1 class="component-header">
                       Ангилал
                       <span className="showall">Бүгдийг үзэх<img src={all} alt=""/></span>
                   </h1>
               </div>
           </div>
           <div className="container">
               <span className="col10">
                   <span className="category">
                       <img
                   src="https://media.ebazaar.link/img/category/undaa.svg" alt=""/>
                       <span>Ус, ундаа</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/budaa.svg" alt=""/>
                       <span>Гурил, будаа, гоймон</span>
                   </span>
               </span>

               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/ger_ahui.svg" alt=""/>
                       <span>Гэр ахуй</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/alhocol.svg" alt=""/>
                       <span>Алкоголь</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/suu.svg" alt=""/>
                       <span>Сүү, сүүн бүтээгдэхүүн</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/belen_hool.svg" alt=""/>
                       <span>Бэлэн хоол, түргэн хоол</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/amttan.svg" alt=""/>
                       <span>Амттан</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/darshilsan.svg" alt=""/>
                       <span>Даршилсан, нөөшилсөн бүтээгдэхүүн</span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/amtlagch.svg" alt=""/>
                       <span>Хоол амтлагч, соус </span>
                   </span>
               </span>
               <span className="col10">
                   <span className="category">
                       <img
                           src="https://media.ebazaar.link/img/category/goo_saikhan.svg" alt=""/>
                       <span>Гоо сайхан</span>
                   </span>
               </span>

           </div>
        </div>
    );
};

export default Category;