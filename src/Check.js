import React, {useState} from 'react';
import Modal from 'react-modal';
import logo from './logo.png';
import {billList} from './bills.js';
import './Check.css';

Modal.setAppElement('#root');


const Check = ()=>{

  const [list,updateList] = useState(billList);
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [Sn,setSn]  = useState('');
  const [Description,setDescription]  = useState('');
  const [Category,setCategory]  = useState('');
  const [Amount,setAmount]  = useState('');
  const [Date,setDate]  = useState('');
  const [searchBox,setSearchBox] = useState('');
  const [temp,setTemp] = useState(billList);



  const handleRemoveItem = (ind) => {
     // assigning the list to temp variable
     const temp = [...list];
     // removing the element using splice
     temp.splice(ind, 1);
     // updating the list
     updateList(temp);
    console.log(list);
}

const show_sn = (event) =>{
    console.log(event.target.value);
    setSn(event.target.value);
}

const show_description = (event) =>{
    console.log(event.target.value);
    setDescription(event.target.value);
}

const show_category = (event) =>{
    console.log(event.target.value);
    setCategory(event.target.value);
}

const show_amount = (event) =>{
    console.log(event.target.value);
    setAmount(event.target.value);
}

const show_date = (event) =>{
    console.log(event.target.value);
    setDate(event.target.value);
}

const submit_all = ()=> {

    updateList([...list,{
        description:Description,
        category:Category,
        amount:Amount,
        date:Date
    }]);

    console.log(list);
    setModalIsOpen(false);
    // console.log(Sn,Description,Category,Amount,Date);
    // alert('hiii');
}

  const handleEditItem = (ind) =>{
    alert('This feature will be added soon');
  }


  let filteredList = list.filter(list=>{
    return list.category.toLowerCase().includes(searchBox.toLowerCase());
})

 const filterList = (event) =>{
    // console.log(event.target.value);
    setSearchBox(event.target.value);
//     console.log(searchBox);
    // updateList(filteredList);
//     console.log(list);
}

const mini = () =>{
  // alert('hii');
  temp.sort((a,b)=>b.amount-a.amount);
  alert('This feature will be added soon');
}


// console.log(filteredList);
    return (
<div>
    <nav>
      {/* <p class="welcome">Log in to get started</p> */}
      <input type="text" className="header_searchBox" onChange={filterList} placeholder="Please search here"/>
      <img src={logo} alt="Logo" class="logo"/>
      <button onClick={()=>mini(true)} class="add__btn__min">See min</button>
        <button onClick={()=>setModalIsOpen(true)} class="add__btn">add</button>
    </nav>
    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} overlayClassName="overlay">
      <h1 className="header_modal">Please click on escape incase you don't want to add anything</h1>
      <input onChange = {show_sn} className="input_modal" placeholder="Serial Number"/>
      <input onChange = {show_description} className="input_modal" placeholder="Description"/>
      <input onChange = {show_category} className="input_modal" placeholder="Category"/>
      <input onChange = {show_amount} className="input_modal" placeholder="Amount"/>
      <input onChange = {show_date} className="input_modal" type="date"/>
      <button onClick={()=>setModalIsOpen(false)} className="modal_back">Go back</button>
      <button onClick={submit_all} className="modal_add">add</button>
    </Modal>

    <div class="movements">
        
      {
        filteredList.map((val,ind)=>{
          return(
          <div class="movements__row" key={ind}>
          <div class="movements__type movements__type--deposit">{ind+1}</div>
          <div class="movements__date"><b>{val.date}</b></div>
          <div class="movements__description"><b>{val.description}</b></div>
          <div class="movements__description"><b>{val.category}</b></div>
          <div  class="movements__value">{val.amount}€</div>
          <button onClick={()=>handleEditItem(ind)} class="movements__type movements__type--deposit">edit</button>
          <button onClick={()=>handleRemoveItem(ind)} class="movements__type movements__type--deposit">delete</button>
        </div>
          )
        })
      }
      </div>
      
</div>
    )
}

export default Check;

