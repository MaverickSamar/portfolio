import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleCommand = (command) => {
    switch (command.trim().toLowerCase()) {
      case 'linkedin':
        window.open('https://www.linkedin.com', '_blank');
        setOutput([...output, `Redirecting to LinkedIn...`]);
        break;
      case 'help':
        setOutput([...output, `Available commands: linkedin, help`]);
        break;
      default:
        setOutput([...output, `Command not found: ${command}`]);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '10px', 
      fontFamily: 'monospace', 
      width: '100%', 
      height: '100%', 
      overflowY: 'auto',
      borderRadius: '5px',
      border: '1px solid #00ff00'
    }}>
      <div>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <span>$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ 
            backgroundColor: 'transparent', 
            border: 'none', 
            color: 'white', 
            outline: 'none',
            width: '90%'
          }}
        />
      </form>
    </div>
  );
};

export default Terminal;