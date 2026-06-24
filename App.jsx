import React, { useState } from "react";
import LoginCard from "./Components/LoginCard";
import RegisterCard from "./Components/RegisterCard";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {showRegister ? (
        <RegisterCard
          goToLogin={() => setShowRegister(false)}
        />
      ) : (
        <LoginCard
          goToRegister={() => setShowRegister(true)}
        />
      )}
    </>
  );
}

export default App;