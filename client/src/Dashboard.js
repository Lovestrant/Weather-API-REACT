import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Dashboard.css'

function Dashboard() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  
    const searchLocation = (event) => {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }
  
    return (
      <div className="app" style={{textAlign: "centre"}}>
        <div className="search">
            <h3 style={{color: "green"}}>TYPE LOCATION AND CLICK ENTER BELOW:</h3> <br></br>
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter City/Country'
            type="text" />
        </div>
        <div className="container">
          <div className="top">
            <h3 className="location">
              <p>{data.name}</p>
            </h3>

          </div>

          <tbody style={{textAlign: "center"}}>
                <tr>
                <th>Clouds</th>
                <th>Feels Like</th>
                <th>Humidity</th>
                <th>Wind Speed</th>
              
                </tr>

                     

            {data.name !== undefined &&
            <tr className="bottom">

            <td className="tempy">
            {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
            </td>
              <td className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                
              </td>
              <td className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                
              </td>
              <td className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                
              </td>
            </tr>
          }
              </tbody>
  


        </div>
      </div>
    );
  }

export default Dashboard