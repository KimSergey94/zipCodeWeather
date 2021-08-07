import './main.css'
import { useState, useEffect  } from 'react';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import { Form, Button } from "react-bootstrap";

function Weather({ zipCode }){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44337/api/Weather/?zipCode="+zipCode)
      .then(res => res.json())
      .then(
        (result) => {
            setIsLoaded(true);
            setWeather(result);
            },
        (error) => { 
            setIsLoaded(true);
            setError(error);
        }
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    return <div><span className="error">Error: {error.message}</span></div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul>
            <li>
              <span className="data">City: {weather.City}</span>
            </li>
            <li>
              <span className="data">Temperature: {weather.Temperature > 0 ? '+' : weather.Temperature == 0 ? '' : '-'}{weather.Temperature}&#176;</span>
            </li>
            <li>
              <span className="data">Time zone: {weather.TimeZone}</span>
            </li>
        </ul>
        <span className="error">{weather.ErrorMessage ? 'Error: ' + weather.ErrorMessage : ''}</span>
      </>
      );
  }
}

export default function Main() {
    const [zipCode, setZipCode] = useState();
    const [isSubmitted, setIsSubmitted] = useState();

    function handleChange(e) {
      setZipCode(e.target.value);
      setIsSubmitted(false);
    }

    return (
        <div className="mainPage">
            <br/>
            <Form className='zipCodeForm'
                onSubmit={e => {
                    e.preventDefault();
                    setIsSubmitted(true);
                }} >
                
                <Form.Group>
                    <Form.Control placeholder='Enter your zip code:' onChange={e => handleChange(e)} style={{width:'221px'}}/>
                </Form.Group>
                <Button variant='success' type='submit' disabled={!zipCode}><WbSunnyTwoToneIcon />Get current weather by zip code</Button>
            </Form>
            {isSubmitted && zipCode ? <Weather zipCode={zipCode}  /> : ''}
        </div>
    )
}
