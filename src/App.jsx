import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [condition, setCondition] = useState("");
  const [advice, setAdvice] = useState("");
  const [open, setOpen] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState(false)
  const [bmistate,setBmiState]=useState(false);


  const showButton = () => {
    setButtonVisibility(true)
  }

  const bmiShow=()=>{
    setBmiState(true)
  }

  const getColor = () => {
    if (bmi < 18.5) {
      return "yellow"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "green"
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "orange"
    } else {
      return "red"
    }
  };



  const handleBMI = () => {

    if (height <= 0 || weight <= 0) {
      toast.error("Please enter valid height and weight values!");
      return;
    }

    const result = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(result);

    
    if (result < 18.5) {
      setCondition("You are Underweight");
      setAdvice("Focus on Nutrient-Dense Foods.Start Strength Training and Exercise.Maintain Consistent Eating Habits");
    } else if (result >= 18.5 && result <= 24.9) {
      setCondition("You have a Healthy Weight");
      setAdvice("Adopt a Well-Balanced Diet.Stay Physically Active.Prioritize Mental and Emotional Well-being");
    } else if (result >= 25 && result <= 29.9) {
      setCondition("You are Overweight");
      setAdvice("Adopt a Balanced Diet.Start with Low-Impact Exercises,Strength Training,Increase Daily Activity,Set Realistic Goals");
    } else {
      setCondition("You are Obese");
      setAdvice("Adopt a Calorie-Deficit Diet,Focus on Whole Foods,Limit Sugar and Refined Carbs.Incorporate Strenght training,Increase daily movement");
    }
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBmi(0);
    setCondition("");
    setAdvice("");
    setButtonVisibility(false)
    setBmiState(false)
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
        <Card className="text-center rounded p-2 shadow" style={{ width: "400px" }}>
          <div className='p-3' style={{ backgroundColor: "#003f88", height: "70px" }}>
            <h1 className="text-white">BMI CALCULATOR</h1>
          </div>
          <Card.Body>
            <div className="p-3">
              <TextField
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                label="Height (cm)"
                type="number"
                fullWidth
                className="mb-3 form-control shadow"
              />
              <TextField
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                label="Weight (kg)"
                type="number"
                fullWidth
                className='form-control shadow'
              />
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <Button onClick={handleReset} variant="danger">
                RESET
              </Button>
              <Button onClick={() => { handleBMI(); showButton(); bmiShow(); }} variant="success">
                CALCULATE BMI
              </Button>
            </div>
            {bmistate && <h2 className='fw-bolder fs-1'>BMI: {bmi || "--"}</h2>}
            <h3 className='fw-bold fs-1' style={{ color: getColor() }}>{condition}</h3>
            {buttonVisibility && <Button className='mt-3 p-2 bg-info text-secondary'  onClick={() => setOpen(!open)} aria-expanded={open}>
              Advice? Click here...
            </Button>}
            <Fade in={open}>
              <div className="mt-3">
                <p className="text-justify fs-5 fw-normal">{advice}</p>
              </div>
            </Fade>
          </Card.Body>
        </Card>
        <ToastContainer position='top-center' theme="colored" autoClose={2000} />
      </div>
    </>
  );
}

export default App;


