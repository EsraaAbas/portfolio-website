import React from "react";
import './about.css';

export function About() {
    return (
        <div className="about">
            
            <div className="aside">
              <h1 className="h1">About me</h1>
            </div>
            <div className="right_side">
                <p className="p">
                    This is a simple application that demonstrates how to use React Router.
                    The Amazon rainforest, often referred to as the 
                    plays a crucial role in regulating the global climate by absorbing vast amounts of carbon 
                    dioxide and producing oxygen. Spanning approximately 5.5 million square kilometers across 
                    nine countries, it is home to an unparalleled diversity of flora and fauna, with millions 
                    of species yet to be discovered. The rainforest's ecosystem supports indigenous communities 
                </p>
                
                <button className="buttom_download">Download Resume</button>
            </div>

        </div>
    );
}