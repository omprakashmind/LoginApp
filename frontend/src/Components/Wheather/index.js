import React from 'react'
import {Input,Paper,Button,FormControl,InputLabel,Container,AppBar} from '@material-ui/core'
import './styles.css'
import axios from 'axios'





class Wheather extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:'Delhi',
            data:{}
        }
    }

  fetchCity=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      })
  }

  componentDidMount=()=>{
      const city=this.state.city
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=`+city+`&APPID=f09785c8f0fa708ea14a2352af994227`)
      .then((res)=>{
          this.setState({
              data:res
          })
      })
      .catch((err)=>console.log(err))
      this.setState({
          city:'',
          data:{}
      })
  }

  getWheather=()=>{
    const city=this.state.city
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=`+city+`&APPID=f09785c8f0fa708ea14a2352af994227`)
    .then((res)=>{
        this.setState({
            data:res
        })
    })
    .catch((err)=>console.log(err))
    this.setState({
        city:'',
        data:{}
    })

  }


    render(){
        return(
            <>
            <Paper>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="city">Enter the city name</InputLabel>
                      <Input name='city' value={this.state.city} onChange={this.fetchCity} />
                </FormControl>
            </Paper>

            <Button onClick={this.getWheather}>SUBMIT</Button>
              
            </>
        )
    }
}




export default Wheather;