import React from 'react';
import { Dimmer, Loader , Image,Grid } from 'semantic-ui-react'

export default function SummonerInfo(props){
    return (
        <div style={{marginTop:'8rem',paddingBottom:'8rem'}}>
            {
                props.isLoading && <Dimmer  active>
                    <Loader active>Loading</Loader>
                </Dimmer>
            }
            {
                !props.isLoading && props.info && 
                <div>
                    <h1>About {props.info[0].summonerName} : </h1>
                    <br></br>
                    <Grid columns='two' divided>
                        <Grid.Row >
                            <Grid.Column width={8}>
                                <h3>FLEX</h3>
                                <Image wrapped size='medium' src = {'/images/'+props.info[0].tier.toLowerCase()+'.png'}/>
                                 <h1> {props.info[0].tier + ' ' + props.info[0].rank} </h1> 
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h3>SOLO</h3>
                                <Image wrapped size='medium' src = {'/images/'+props.info[1].tier.toLowerCase()+'.png'}/>
                                <h1> {props.info[1].tier + ' ' + props.info[1].rank} </h1> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                </div>
            }
            
        </div>
    )
}