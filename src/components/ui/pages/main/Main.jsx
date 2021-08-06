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
            console.log(result);
            console.log(weather);
    
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
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <ul>
            <li>
              {weather.City} {weather.Temperature} {weather.TimeZone}
            </li>
        </ul>
      );
  }
}

export default function Main() {
    const [zipCode, setZipCode] = useState();
    const [isSubmitted, setIsSubmitted] = useState();

    return (
        <div className="mainPage">
            <br/>
            <Form className='zipCodeForm'
                onSubmit={e => {
                    e.preventDefault();
                    setIsSubmitted(true);
                }} >
                
                <Form.Group>
                    <Form.Control placeholder='Enter your zip code:' onChange={e => setZipCode(e.target.value)} style={{width:'221px'}}/>
                </Form.Group>
                <Button variant='success' type='submit' disabled={!zipCode}><WbSunnyTwoToneIcon />Get current weather by zip code</Button>
            </Form>
            {isSubmitted ? <Weather zipCode={zipCode}  /> : ''}
        </div>
    )
}
