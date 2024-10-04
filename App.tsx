import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUserForm from './components/AddUserForm';
import ViewUser from './components/ViewUser';
import EditUserForm from './components/EditUserForm'; // Assuming you have an edit form component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddUserForm />} />
        <Route path="/user/:id" element={<ViewUser userId={1} />} /> {/* Example: Pass userId dynamically */}
        <Route path="/edit-user/:id" element={<EditUserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
