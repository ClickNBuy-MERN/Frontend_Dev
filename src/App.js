// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from './pages/login.page';
// import SignupPage from './pages/signup.page';
// import ForgotPasswordPage from './pages/forgotPassword.page';
// import ResetPasswordPage from './pages/resetPassword.page';

// function App() {
//   return (
//     <Router>
//       <Routes>
      
//   <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to /login */}
//   <Route path="/login" element={<LoginPage />} />
//   <Route path="/signup" element={<SignupPage />} />
//   <Route path="/forgot-password" element={<ForgotPasswordPage />} />
  
//   <Route path="/reset-password" element={<ResetPasswordPage />} />
// </Routes>

//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login.page';
import SignupPage from './pages/signup.page';
import ForgotPasswordPage from './pages/forgotPassword.page';
import ResetPasswordPage from './pages/resetPassword.page';
import LandingPage from './pages/landing.page';
import AdminDashboard from './pages/admin.dashboard';
import UserDashboard from './pages/user.dashboard';
import ProtectedRoute from './components/protectedRoute';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute roles={['user', 'admin']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;