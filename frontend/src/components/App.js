import React, { useState } from 'react';
import { Container,Header } from 'semantic-ui-react';
import SearchSummoner from './SearchSumonner';
import SummonerInfo from './SummonerInfo.jsx';
import axios from 'axios';
function App() {
  const [isLoading,setIsLodaing] = useState(false);
  const changeLoadingState = () => setIsLodaing(!isLoading);
  const [info , setinfo] = useState(null);

  const fetchInfo = async (summonerName) => {
    setIsLodaing(true);
    const info = await axios.post('/getInformationOnSummonerName',{name : summonerName});
    setIsLodaing(false);
    const rankedStats = await axios.post('/getrankedstats',{summid:info.data.id}); 
    console.log(rankedStats.data);
    setinfo(rankedStats.data);
  }

  return (
    <Container textAlign="center" style={{marginTop:'2rem'}}>
      <Header as='h3'>Search information about a summoner !</Header>
      <SearchSummoner changeLoadingState = {changeLoadingState} fetchInfo = {fetchInfo}/>
      <SummonerInfo isLoading = {isLoading} info={info}/>
    </Container>
  );
}

export default App;
