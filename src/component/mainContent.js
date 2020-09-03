import React from 'react'


const MainContent = (props) => {
    const { handleClick, currentInput, oldInput, logicSign } = props
    return (
        <div id="container">
            <div id="screen">
                <p id="screen-input">{oldInput}</p>
                <p id="logical-sign">{logicSign}</p>
                <p id="screen-result">{currentInput}</p>
            </div>
            <div className="input">
                <div id="digits">
                    <button onClick={(e) => { handleClick(e) }} className="button digit">7</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">8</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">9</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">4</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">5</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">6</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">1</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">2</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">3</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">0</button>
                    <button onClick={(e) => { handleClick(e) }} className="button digit">.</button>
                    <button onClick={(e) => { handleClick(e) }} className="button logicSign">^</button>

                </div>
                <div id="operator-signs">
                    <button onClick={(e) => { handleClick(e) }} className="button equate">Del</button>
                    <button onClick={(e) => { handleClick(e) }} className="button equate">AC</button>
                    <button onClick={(e) => { handleClick(e) }} className="button logicSign">*</button>
                    <button onClick={(e) => { handleClick(e) }} className="button logicSign">/</button>
                    <button onClick={(e) => { handleClick(e) }} className="button logicSign">+</button>
                    <button onClick={(e) => { handleClick(e) }} className="button logicSign">-</button>
                    <button onClick={(e) => { handleClick(e) }} className="button equate">Ans</button>
                    <button onClick={(e) => { handleClick(e) }} className="button equate">=</button>
                </div>

            </div>

        </div>

    )
}

export default MainContent