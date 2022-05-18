import React from 'react';
import "../styles/Header.css";
import logo from '../assets/logo.svg'
import noti from '../assets/noti.svg'
import prof from '../assets/prof.svg'
import store from '../assets/store.svg'
import arrow from '../assets/arrow.svg'
import sags from '../assets/sags.svg'
import categoryIcon from '../assets/category2.svg'
const Header = () => {
    return (
        <div className="header" id="stickyheader">
            <div className="container">
             <div className="col1">
                 <div id="mid-bar">
                     <div id="logo">
  <img src={logo} alt="logo"/>
                     </div>
                     <div id="search">
<input placeholder="Хайх утгаа энд оруулна уу..." autocomplete="off"  id="q" type="text"/>
                     </div>
                     <div id="user" className="right">
                         <span id="noti">
                             <img src={noti} alt=""/><p>Мэдэгдэл</p>
                             </span>
                         <span id="account-menu">
                             <img src={prof} alt=""/>
                             <span id="account-drop"><p>Нэвтрэх</p></span>
                         </span>
                         <span  id="cart">
                             <span id="tradeshop">
<span>
    <img src={store} alt="store"/>
</span>
<span>
    <h2>
        Таны үйлчилгээний цэг энд байна
    </h2>
</span>
<span>
    <img src={arrow} alt="arrow"/>
</span>
                             </span>
                             <span id="cartstatus">
<span>
        <img src={sags} alt="sags"/>
</span>
<span>
    <h1 className="mr-2" >0</h1>
<h2>
    Таны сагсанд
</h2>
</span>
                             </span>
                         </span>
                     </div>
                 </div>
             </div>
            </div>
            <div id="navigation">
                <div className="container">
                    <div className="nav-col">
                        <span>
                            <img src={categoryIcon} alt="cateIcon"/>
                        </span>
                        <span>
                            Нийлүүлэгчид
                        </span>
                        <span>
                            Бүх бүтээгдэхүүн
                        </span>
                        <span class="right">
                            <span></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;