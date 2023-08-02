import axios from "axios";
import React from "react";
import './News.css'
// import { faker } from '@faker-js/faker';
// import ReactDOM from 'react-dom';
import Card from './Card'
const baseURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f2e6aec82d749a4b1194f8b07fd5b8a";
export default function News() {
const [info, setInfo] = React.useState(null);


React.useEffect(() => {
axios.get(baseURL).then((response) => {
setInfo(response.data.articles);
});
}, []);
if (!info) return null;
return (
<div>
       {info.map((m,index) => {
            return (<div key={index} style={{display:'flex',float:'left',justifyContent:'space-around',padding:'50px'}}>
            <Card
            img = {m.urlToImage}
            des = {m.title}
            auth={m.author}/>
            </div>)
        })}
</div>
);
}
