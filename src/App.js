import React, { Component } from 'react';




class App extends Component {
  constructor(props){
    super(props)
    this.cityList = [
      {name:'Kurnool',country:'India'},
      {name:'Venice',country:'Italy'},
      {name:'paris',country:'USA'},
      {name:'Hyderabad',country:'India'},
      {name:'Goa',country:'India'},
      {name:'Egypt',country:'Africa'},
      {name:'America',country:'USA'},
      {name:'francy',country:'France'},
      {name:'geman',country:'Germany'},
      {name:'Darjeeling',country:'India'},
      {name:'jahj',country:'US'},
  ]
}
   render() {

     return(
      <div>
        
        {/* <Property name="Ram"/> */}
        <ol>
          {this.cityList.filter((elem)=>elem.country === 'India').map((city,idx) => {
            return <li key={`location${idx}`}> { city.name}</li>
          }) 
          }
        </ol>
      </div>
     )
   }
  }


export default App