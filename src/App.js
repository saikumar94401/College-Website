import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';
import MarksSheet from './components/MarksSheet/MarksSheet';
import FeePayments from './components/FeePayments/FeePayments';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/details" element={< Details />} />
        <Route  path="/marks" element={< MarksSheet />} />
        <Route  path="/payments" element={< FeePayments />} />
        <Route  path="/contact" element={< ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>




    </BrowserRouter>
  );
}

export default App;
