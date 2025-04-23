
import React from 'react';
import './skilles.css';


export function Skilles() {
    return (
        <div className="skilles">
            <h1 className="skilles_title">Skilles</h1>
            <p className="skilles_p">skills refer to the abilities and competencies that enable individuals to perform
                 tasks effectively and efficiently. They can be categorized into hard skills,
                  which are specific. 
                 </p>
            <div className="skilles_contianer">
                <div className="product">
                    <div className="product_title">
                        <h1>MY PRODUCTS</h1>
                    </div>
                    <div className="product_h">
                    <h1 >UI/UX Designe</h1>
                    <h1 >Responseve Web</h1>
                    <h1 >Web Designe</h1>
                    <h1 >Mobile app Designe</h1>

                    </div>
                    


                </div>
                <div className="skilles_box">
                    <div className='pro_div'>

                    <div className='pro_title'>HTML</div>
                    <progress className='progress' value="32" max="100">html</progress>
                    </div>
                    <div className='pro_div'>
                    <div className='pro_title'>CSS</div>
                    <progress className='progress' value="50" max="100">html</progress>
                    </div>
                    <div className='pro_div'>
                    <div className='pro_title'>JS</div>
                    <progress className='progress' value="60" max="100">html</progress>
                    </div>
                    <div className='pro_div'>
                    <div className='pro_title'>OOP</div>
                    <progress className='progress' value="90" max="100">html</progress>
                    </div>
                    <div className='pro_div'>
                    <div className='pro_title'>RESPONSVE</div>
                    <progress className='progress' value="20" max="100">html</progress>
                    </div>


                </div>  
            </div>

        </div>
    );
}