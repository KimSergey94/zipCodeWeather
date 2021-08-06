import './queriesHistory.css'
import { useState, useEffect  } from 'react';

function GetQueries(){
    const [queries, setQueries] = useState();
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
    return <div><span className="error">Error: {error.message}</span></div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return  <> 
        {queries.map(x=> (query) => {
            return (
                <div key={query.Id} className="col-12 col-md-5 col-lg-5 col-xl-5 m-1">
                    {query.ZipCode}
                </div>
            ); })
        }
    </>
}
}

export default function QueriesHistory() {
    return (
        <div className="queriesHistoryPage">
            <br/>
            <GetQueries />
        </div>
    )
}
