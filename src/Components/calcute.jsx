

import React from 'react'
function Calcute(props) {
    return (
        <div style={{width:250,height:250,backgroundColor:"yellow",textAlign:'center'}}>
       
              
      
                <button  onClick={()=>props.onesignselect('+')}>+</button>
                <button  onClick={()=>props.onesignselect('-')}>-</button>
                <button  onClick={()=>props.onesignselect('/')}>/</button>
                <button  onClick={()=>props.onesignselect('*')}>*</button><br/>
   
                <button  onClick={()=>props.onselectkey(props.oninsertkey[0])}>{props.oninsertkey[0]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[1])}>{props.oninsertkey[1]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[2])}>{props.oninsertkey[2]}</button>
                <br/>
  
                <button  onClick={()=>props.onselectkey(props.oninsertkey[3])}>{props.oninsertkey[3]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[4])}>{props.oninsertkey[4]}</button>

                <button  onClick={()=>props.onselectkey(props.oninsertkey[5])}>{props.oninsertkey[5]}</button>
                <br/>
    
                <button  onClick={()=>props.onselectkey(props.oninsertkey[6])}>{props.oninsertkey[6]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[7])}>{props.oninsertkey[7]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[8])}>{props.oninsertkey[8]}</button>
                <button  onClick={()=>props.onselectkey(props.oninsertkey[9])}>{props.oninsertkey[9]}</button><br/>

    
                
                <button  onClick={()=>props.onequalsign()}>=</button>
                <button  onClick={()=>props.onckey()}>C</button>
               <br/>
     
</div>
        
    )
}

export default Calcute
