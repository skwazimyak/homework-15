import ReactDOM from "react-dom";
import React from "react";
import "../src/style.css"
const data = {
  "id": 286, "name": "Rick D-99", "status": "Dead", "species": "Human", "type": "", "gender": "Male", "origin": { "name": "Earth (D-99)", "url": "https://rickandmortyapi.com/api/location/58" }, "location": { "name": "Citadel of Ricks", "url": "https://rickandmortyapi.com/api/location/3" }, "image": "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
  "episode": ["https://rickandmortyapi.com/api/episode/22"], "url": "https://rickandmortyapi.com/api/character/286", "created": "2017-12-31T19:49:55.181Z"
}
function Card(){
  return(
    <div class="charCard">
        <div class="image">
            <img src={data.image}/>
        </div>
        <div class="text">
            <section>
                <div class="name">{data.name}</div>
                <div class="status">{data.status} - {data.species}</div>
            </section>
            <section>
                <span class="where">Last known location:</span>
                <div class="info">{data.location.name}</div>
            </section>
            <section>
                <span class="where">First seen in:</span>
                <div class="info">{data.origin.name}</div>
            </section>
        </div>
    </div>
  )
}
const div = document.getElementById("root")
const rootElement = ReactDOM.createRoot(div)
rootElement.render(
  <Card/>
)