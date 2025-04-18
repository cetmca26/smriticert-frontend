
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/student/StudentDashboard";
import NotFound from "./pages/NotFound";
import InstitutionDashboard from "./pages/institution/InstitutionDashboard";
import Landing from "./Landing";
import StudentRegister from "./pages/StudentRegister";
import InstitutionRegister from "./pages/InstitutionRegister";


function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    
    
     <Router>
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/register/student" element={<StudentRegister />} />
       <Route path="/register/institution/*" element={<InstitutionRegister />} />
       <Route
         path="/student-dashboard"
         element={user?.role === "student" ? <StudentDashboard /> : <Navigate to="/login" />}
       />
       <Route
         path="/institution-dashboard"
         element={user?.role === "institution" ? <InstitutionDashboard /> : <Navigate to="/login" />}
       />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </Router>

   
  );
}

export default App;