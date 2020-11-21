import React, { useState } from 'react';

import { Button, Input } from 'semantic-ui-react'

export default function SearchSummoner(props){
    const [sumName, setsumName] = useState('');
    const changeSumName = (e) => setsumName(e.target.value);
    const fetch = () => {
        console.log(sumName);
        props.fetchInfo(sumName);
       
    }
    return (
        <div style = {{marginTop : '4rem'}}>
            <Input
                 placeholder='Summoner Name...'
                 onChange={changeSumName}
            />
            <Button primary onClick={fetch} style={{marginLeft:'0.5rem'}}>Search</Button>

        </div>
    )
}