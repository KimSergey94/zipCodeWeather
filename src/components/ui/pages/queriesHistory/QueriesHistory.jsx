import './queriesHistory.css'
import { useState, useEffect  } from 'react';
import { Card,CardTitle,CardBody,CardSubtitle,CardText } from 'reactstrap';


function GetQueries(){
    const [queries, setQueries] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://localhost:44337/api/QueriesHistory/GetAllQueriesList/")
      .then(res => res.json())
      .then(
        (result) => {
            setIsLoaded(true);
            console.log(result);
            setQueries(result);
        },
        (error) => { 
            setIsLoaded(true);
            setError(error);
        }
      ) 
  }, [])

  if (error) {
    return <><span className="error">Error: {error.message}</span></>;
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return <RenderQueriesHistory queries={queries} />
  }
}

const RenderQueriesHistory = (props) => {
     const queriesHistory = props.queries.map((query) => {
        return (
            <div key={query.Id} className="queryDiv">
                <RenderQueryItem query={query} onClick={props.onClick} ></RenderQueryItem>
            </div>
        );
    })
    
    return (
        <div className="queries">
            {queriesHistory}
        </div>
    );
}

function RenderQueryItem({query, onClick}){
    return (
        <Card style={{ width: '18rem' }} className="QueryCard">
            <CardBody className="QueryBody">
                <CardTitle className="QueryTitle">ZipCode: {query.ZipCode}</CardTitle>
                <CardSubtitle  className="QuerySubtitle">Id and status: {query.Id} ({query.Status})</CardSubtitle>
                <CardText className="QueryText">City: {query.City ? query.City : ''}</CardText>
                <CardText className="QueryText">Temperature: {query.Temperature ? query.Temperature == 0 ? query.Temperature : query.Temperature > 0 ? '+'+query.Temperature+'°' : '-'+query.Temperature+'°' : ''}</CardText>
                <CardText className="QueryText">TimeZone: {query.TimeZone ? query.TimeZone : ''}</CardText>
                <CardText className="QueryText">{query.ErrorMessage ? 'Error Message: '+query.ErrorMessage : ''}</CardText>
            </CardBody>
        </Card>

    );
}

export default function QueriesHistory() {
    return (
        <div className="queriesHistoryPage">
            <br/>
            <GetQueries />
        </div>
    )
}
