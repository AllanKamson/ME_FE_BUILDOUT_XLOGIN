import React, { useState } from 'react'


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "user" && password === "password"){
      setError("");
      setIsSubmitted(true);
    }
    else{
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      ): (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <div className='user'>
            <label htmlFor="username">Username: </label>
            <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          </div>
          <div className='pass'>
            <label htmlFor="password">Password: </label>
            <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default App
