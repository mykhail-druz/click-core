import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import BasicPackageForm from './pages/forms/BasicPackageForm';
import HighTicketPackageForm from './pages/forms/HighTicketPackageForm';
import CustomPackageForm from './pages/forms/CustomPackageForm';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forms/basic" element={<BasicPackageForm />} />
          <Route path="/forms/high-ticket" element={<HighTicketPackageForm />} />
          <Route path="/forms/custom" element={<CustomPackageForm />} />
        </Routes>
        <BasicPackageForm /> // FOR TEST!!
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;