import React, { useEffect, useState } from 'react';
import './App.css';
import MainContent from './component/mainContent'
import Footer from './component/footer'
import Header from './component/header'

function App() {
  const [currentDigitInput, setCurrentDigitInput] = useState(""); // current updating input
  const [oldDigitInput, setOldDigitInput] = useState(""); // previuos inpu after pressing a logic sign
  const [curLogicSgn, setCurLogicSgn] = useState(""); // logic sign that determine the calculation
  const [ans, setAns] = useState("")
  function handleClick(evt) { // handles the clicks
    let inputType = evt.target.classList.item(1)
    let inputContent = evt.target.innerText
    if (inputType === "digit") {
      digitInput.displayInput(inputContent)
    } else if (inputType === "logicSign") {
      logicSign.sign(inputContent)
    } else if (inputType === "equate") {
      equate.run(inputContent);
    }

  }
  // USER INPUTS FROM NUMBERS TO OPERATORS
  var digitInput = {
    addCommas: function (digit) {
      return digit.toLocaleString()
    },
    removeCommas: function (digit) {
      return digit.replace(/,/g, '')
    },
    convertDigitToString: function (digit) {
      return digit.toString()
    },
    convertStringToDigit: function (str) {
      return parseFloat(str)
    },
    
    displayInput: function (str) {
      if (str ==="." || currentDigitInput.indexOf(".") >= 0 ) {
        handleDot(currentDigitInput, str);
      }else{
        handleInput(currentDigitInput, str)
      }
      function handleInput(currentDigitInput ,str) {
        let currStrInput = currentDigitInput + str
        console.log(currStrInput)
        let currDigitInput = digitInput.convertStringToDigit(digitInput.removeCommas(currStrInput));
        console.log(currDigitInput)
        if (currentDigitInput.length >= 12) return
        if (currentDigitInput === "") {
          setCurrentDigitInput(str)
        }
        else {
          setCurrentDigitInput(digitInput.addCommas(currDigitInput));
        }
      }
       function handleDot(currentDigitInput ,str) {
        if ( str === "." && currentDigitInput.indexOf(".") >= 0) return
        if(currentDigitInput.indexOf(".") === 0) {
          let num = digitInput.convertStringToDigit(currentDigitInput + str)
          setCurrentDigitInput(digitInput.convertDigitToString(num))
        }else {
          setCurrentDigitInput(currentDigitInput + str)
        }  
      }
      

    }

  };

  var logicSign = {
    sign: function (sgn) {
      if (currentDigitInput ===".") return
      if (this.handleMinusSign(sgn)) return
      if (!curLogicSgn && !oldDigitInput && !currentDigitInput) return
      if ((curLogicSgn === "" || curLogicSgn) && currentDigitInput === "" && oldDigitInput) {
        setCurLogicSgn(sgn);
      } else if (curLogicSgn === "" && currentDigitInput !== "-") {
        console.log("you")
        setCurLogicSgn(sgn);
        setOldDigitInput(currentDigitInput)
        setCurrentDigitInput("");
      } 
      if (currentDigitInput && oldDigitInput && curLogicSgn) {
        calculate.logicSign(currentDigitInput, oldDigitInput, curLogicSgn);
        setCurLogicSgn(sgn);
        setCurrentDigitInput("")

      }

    },
    handleMinusSign: function (sgn) {
      if (oldDigitInput && curLogicSgn === "") return false
      if (currentDigitInput === "" && sgn === "-" && curLogicSgn === "-") {
        setCurrentDigitInput(sgn);
        return true
      } else if (currentDigitInput === "" && oldDigitInput === "" && curLogicSgn === "" && sgn==="-") {
        setCurrentDigitInput(sgn);
        console.log("me")
      }
      else {
        return false
      }

    }
  }

  var equate = {
    del: function (str, check) {
      let commaRemoved = digitInput.removeCommas(str);
      let updatedDigit = commaRemoved.substring(0, commaRemoved.length - 1);
      let result = updatedDigit
      if (check) {
        updatedDigit = (updatedDigit === "") ? "" : digitInput.convertStringToDigit(updatedDigit);
        let commaAdded = digitInput.addCommas(updatedDigit)
        result = commaAdded
      }
      return result
    },
    Ac: function () {
      if (currentDigitInput !== "") {
        setCurrentDigitInput("")
      } else {
        setCurLogicSgn("");
        setOldDigitInput("");
      }
    },
    Ans: function () {
      if (ans !== "" && currentDigitInput === "") {
        setCurrentDigitInput(ans)
      }
    },

    run: function (params) {
      switch (params) {
        case "Del":
          if (!currentDigitInput && !oldDigitInput && !curLogicSgn) return
          if (currentDigitInput === "" && curLogicSgn && oldDigitInput) {
            setCurLogicSgn(this.del(curLogicSgn, false));
          } else if (currentDigitInput === "" && curLogicSgn === "" && oldDigitInput) {
            setCurrentDigitInput(oldDigitInput);
            setOldDigitInput("");
          } else {
            setCurrentDigitInput(this.del(currentDigitInput, true));
          }

          break;
        case "AC":
          this.Ac()
          break;
        case "Ans":
          this.Ans()
          break;
        case "=":
          if (currentDigitInput && oldDigitInput && curLogicSgn) {
            calculate.equalTo(currentDigitInput, oldDigitInput, curLogicSgn);
          }
          break;

        default:
          break;
      }
    }

  }
  var calculate = {
    equalTo: function (current, old, sign) {
      let result = this.cal(current, old, sign);
      setAns(result);
      setCurLogicSgn("");
      setOldDigitInput("")
      setCurrentDigitInput(result)
    },
    logicSign: function (current, old, sign) {
      let result = this.cal(current, old, sign);
      setAns(result);
      setOldDigitInput(result);


    },
    cal: function (current, old, sign) {
      let currRemovedComma = digitInput.removeCommas(current);
      let oldRemovedComma = digitInput.removeCommas(old);
      let currentNum = digitInput.convertStringToDigit(currRemovedComma);
      let oldNum = digitInput.convertStringToDigit(oldRemovedComma);
      let result;
      switch (sign) {
        case "+":
         result = oldNum + currentNum
          break;
        case "-":
        result = oldNum - currentNum
          break;
        case "*":
         result = oldNum * currentNum
          break;
        case "/":
         result = oldNum / currentNum
          break;
        case "^":
         result = Math.pow(oldNum, currentNum);
          break;

        default:
          break;
      }
      return digitInput.addCommas(result);

    }
  }
  return (
    <div className="App">
      <Header />
      <MainContent
        handleClick={handleClick}
        currentInput={currentDigitInput}
        logicSign={curLogicSgn}
        oldInput={oldDigitInput}
      />
      <Footer />
    </div>
  );
}

export default App;
