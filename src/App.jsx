import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sum } from './helper'
function App() {
 let winCondition = (ticket) =>{
  return sum(ticket) === 22 ;
 }
 let allSameDigit = (ticket ) => {
  return Ticket.every((num) => num === ticket[0]);
 }
  return (
    <>
      <Lottery  n={4} winCondition = {winCondition} />
       </>
  )
}

export default App;
