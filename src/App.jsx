import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import Carousal from './Carousal';
import Todolist from './Todolist';
import Counter2 from './Counter2';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      newstudent:{
        firstname:'',
        lastname:'',
        dob:'',
        remarks:''
      },
      students:[],
      birdImages:["https://cdn.pixabay.com/photo/2022/08/10/06/15/birds-7376432_960_720.jpg",
      "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"],
      carImages:[
        "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png",
        "https://cdn.pixabay.com/photo/2014/12/16/03/37/motorcycle-569865_960_720.jpg"
      ]
    }
  }
  // handleFirstname = (e)=>{
  //   this.setState({newstudent:{...this.state.newstudent,firstname:e.target.value}})
  // }
  // handleLastname = (e)=>{
  //   this.setState({newstudent:{...this.state.newstudent,lastname:e.target.value}})
  // }
  // handleDob = (e)=>{
  //   this.setState({newstudent:{...this.state.newstudent,dob:e.target.value}})
  // }
  // handleRemarks = (e)=>{
  //   this.setState({newstudent:{...this.state.newstudent,remarks:e.target.value}})
  // }
  addStudent=()=>{
    this.setState({students:[...this.state.students,this.state.newstudent]})
  }
  handleInput = (e)=>{
    this.setState({newstudent:{...this.state.newstudent,[e.target.name]:e.target.value}})
  }
  render(){
    return (
      <div className='betterview'>
        <Counter2></Counter2>
        <Counter gender="male" start={10} step={5}></Counter>
        {/* <Todolist></Todolist> */}
        {/* <Carousal images={this.state.birdImages} cname="birds"></Carousal>
        <Carousal images={this.state.carImages} cname='cars'></Carousal>
        
        <Counter gender='female' start={20} step={10}></Counter>
        <hr />
        <label htmlFor='firstname'>Firstname</label>
        <input type="text" name='firstname' onKeyUp={this.handleInput}/>
        <br/>
        <label htmlFor='lastname'>Lastname</label>
        <input type="text" name='lastname' onKeyUp={this.handleInput}/>
        <br/>
        <label htmlFor='dob'>DOB</label>
        <input type="date" name='dob' onChange={this.handleInput}/>
        <br/>
        <label htmlFor='remarks'>Remarks</label>
        <input type="text" name="remarks" onKeyUp={this.handleInput}/>
        <br/>
        <button onClick={this.addStudent}>Add Students</button>
        <table border='2px'>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Remarks</th>
          </thead>
          <tbody> 
            {
              this.state.students.map((s)=>{
                return (
                  <tr>
                    <td>{s.firstname}</td>
                    <td>{s.lastname}</td>
                    <td>{s.dob}</td>
                    <td>{s.remarks}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> */}
      </div>
    )
  }
}

export default App;
/*
  controlled components
    input state varibale
  uncontrolled components
    DOM or ref

*/