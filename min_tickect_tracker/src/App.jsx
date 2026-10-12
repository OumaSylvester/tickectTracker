import './App.css'
import {Routes, Route} from 'react-router-dom'
import CreateTicket from './components/createTicket'
import ListTickets from './components/listTickets'
import UpdateTicketStatusOrPriority from './components/updateTickect'
import TicketStats from './components/tickectStats'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListTickets />} />
      <Route path="/create" element={<CreateTicket />} />
      <Route path="/update/:id" element={<UpdateTicketStatusOrPriority />} />
      <Route path="/stats" element={<TicketStats />} />
    </Routes>
  )
}

export default App
