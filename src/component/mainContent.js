import React from 'react'


const MainContent = () => {
    return (
        <div id="container">
            <div id="screen">
                <p id="screen-input"></p>
                <p id="screen-result"> 105,678,856,58</p>
            </div>
            <div className="input">
                <div id="digits">
                    <button className="button">7</button>
                    <button className="button">8</button>
                    <button className="button">9</button>
                    <button className="button">4</button>
                    <button className="button">5</button>
                    <button className="button">6</button>
                    <button className="button">1</button>
                    <button className="button">2</button>
                    <button className="button">3</button>
                    <button className="button">0</button>
                    <button className="button">.</button>
                    <button className="button">^</button>

                </div>
                <div id="operator-signs">
                    <button className="button">Del</button>
                    <button className="button">AC</button>
                    <button className="button">*</button>
                    <button className="button">/</button>
                    <button className="button">+</button>
                    <button className="button">-</button>
                    <button className="button">Ans</button>
                    <button className="button">=</button>
                </div>

            </div>

        </div>
        
    )
}

export default MainContent