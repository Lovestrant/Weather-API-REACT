import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [good, setGood] = useState("");
    const [firstRandomNum, setfirstRandomNum] = useState("");
    const [Answer, setAnswer] = useState("");
    const [secondRandomNum, setsecondRandomNum] = useState("");

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }



      const generateRandomNum = ()=> {
        let firstNum = randomNumberInRange(0,9);
        setfirstRandomNum(firstNum);
  
        let secondNum = randomNumberInRange(0,9);
        setsecondRandomNum(secondNum);
        
      }
      const handleSubmit = ()=> {
        let TheCorrectAnswer = firstRandomNum+secondRandomNum;
        
        if(parseInt(Answer)===TheCorrectAnswer) {
         setGood("Correct Answer");
         setError("");
        //Navigate to Dashboard
        navigate("/Dashboard");
        }else{
         setError("Incorrect Answer");
         setGood("");
        }

      }

  return (
    <div class = "container">
        <div class="row">
            <div class="col-sm-12">
            <h4 style={{color: "green"}}>Generate Random Number and Compute to access the Dashboard:</h4>
             
             <br></br>
            <h6>What is {firstRandomNum} + {secondRandomNum}</h6>

            <button onClick={generateRandomNum}>Generate Random number</button> <br></br><br></br>
            <input type="number" placeholder='Type Answer to generated Random Number' 
             onChange={(e) => {setAnswer(e.target.value)}} /><br></br><br></br>

            <p style={{color: "red"}}>{error}</p>
            <p style={{color: "green"}}>{good}</p>

      
            <button onClick={handleSubmit}>Submit Correct Answer To Login</button> <br></br><br></br>
            </div>
        </div>

    </div>
  )
}

export default Home