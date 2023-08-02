import axios from 'axios'
import { useState } from 'react'

// import './new.css'

const New = () => {

          const [NewData,setNewData] = useState('')
          const [error, setError] = useState('')
          const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-02-15&sortBy=publishedAt&apiKey=3f2e6aec82d749a4b1194f8b07fd5b8a';

          const getData = async () => {
            try {
              console.log("waiting");
              axios.get(url)

              .then(response => {
                console.log("waiting");
                  console.log(response);

              })
              setNewData('')
              console.log("working");
              console.log(NewData);
              setError('')
             } catch (error) {
               setNewData(null)
               setError("No news found")
             }
          }

    return(
        <>
                <button className='button' onClick={getData}>Search</button>
                {NewData}
                {NewData ? (
                    <div>
                    <p className='p'>City Name : {NewData.title} </p>
                  </div>
                ) : (
                  error && <p>{error}</p>
                )}

        </>
    )
}
export default New;