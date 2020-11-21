const express = require('express');
const cors = require('cors');
const  bodyParser = require('body-parser');
const app = express();
const RIOT_KEY = require('./riotKey');
const axios = require('axios');
const apikey = '?api_key='+ RIOT_KEY;
app.use(cors());
app.use(bodyParser.json());

app.post('/getInformationOnSummonerName' , async (req,res) => {
    console.log(req.body);
    const summonerName = req.body.name; 
    
    const info = await axios.get("https://euw1"+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+apikey);
    console.log(info.data);
    res.send(info.data);
})

app.post('/getrankedstats',(req,res)=>{

	const  fetchData = async () => {
		// by summdata.id
		const summid = req.body.summid
		const result = await axios.get("https://euw1" + ".api.riotgames.com/lol/league/v4/entries/by-summoner/"+ summid + apikey);
        console.log(result.data);
        res.send(result.data);
	} 
	fetchData();
});

app.listen(5000,()=>console.log('server starting at port 5000'));