import React from 'react';
import { Dimmer, Loader , Image,Grid, Container } from 'semantic-ui-react'

export default function SummonerInfo(props){
    // props.info => [{?} , {?}]
   // const solo = props.info && props.info[0].queueType.includes("SOLO") ? props.info[0] : 
    //(props.info ? props.info[1]:null)
    //const flex = props.info && props.info[0].queueType.includes("FLEX") ? props.info[0] : 
    //(props.info ? props.info[1]:null)
    let solo,flex;
    if (props.info && props.info[0].queueType.includes("SOLO")){
        solo = props.info[0];
        flex = props.info[1];
    }else if(props.info){
        solo = props.info[1];
        flex = props.info[0];
    }
    return (
        <div style={{marginTop:'8rem',paddingBottom:'8rem'}}>
            {
                props.isLoading && 
                    <Loader active>Loading</Loader>
                
               
            }
            {
                !props.isLoading && props.info && 
                <div>
                    <h1>About {props.info[0].summonerName} : <a  target="_blank" href  ={"https://euw.op.gg/summoner/userName="+ flex.summonerName}>(OP.GG)</a>  </h1>
                    <br></br>
                    <Grid columns='two' divided>
                        <Grid.Row >
                            <Grid.Column width={8}>
                                <h3>FLEX</h3>
                                <Image wrapped size='medium' src = {'/images/'+ flex.tier.toLowerCase()+'.png'}/>
                                 <h1> {flex.tier + ' ' + flex.rank} </h1> 
                                 <h1 style={{color:"green"}}>WINS : {flex.wins }</h1>
                                 <h1 style={{color:"red"}}>LOSSES: {flex.losses }</h1>
                                 <h1 style={{color:""}}>WINRATE: {(flex.wins/(flex.wins+flex.losses)*100).toFixed(2)}%</h1>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h3>SOLO</h3>
                                <Image wrapped size='medium' src = {'/images/'+ solo.tier.toLowerCase()+'.png'}/>
                                <h1> {solo.tier + ' ' +solo.rank} </h1> 
                                <h1 style={{color:"green"}}>WINS : {solo.wins }</h1>
                                <h1 style={{color:"red"}}>LOSSES: {solo.losses }</h1>
                                <h1 style={{color:""}}>WINRATE: {(solo.wins/(solo.wins+solo.losses)*100).toFixed(2)}%</h1>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                </div>
            }
            
        </div>
    )
}