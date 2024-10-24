import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, Typography } from '@mui/material';
import useLogger from './components/useLogger'


function App() {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logType, setLogType] = useState('log');

  const { consoleOutput, logMessage } = useLogger(scope, logType, message);

  const handleSubmit = () => {
    logMessage(); 
    setScope(''); 
    setMessage('');
  }

  return (
    <Box sx={{ width: '100%', padding: '10px' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: '20px' }}>
        {/* Scope input */}
        <TextField
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder='SCOPE'
        />
        {/* Log type selector */}
        <Select
          value={logType}
          onChange={(e) => setLogType(e.target.value)}
        >
          <MenuItem value="error">ERROR</MenuItem>
          <MenuItem value="warn">WARN</MenuItem>
          <MenuItem value="log">LOG</MenuItem>
          <MenuItem value="debug">DEBUG</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
      
      {/* Message input */}
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message here'
      />

      {/* Display the console output */}
      <Box sx={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <Typography>Console</Typography>
        <div>
          {consoleOutput.map((output, index) => (
            <h2 key={index}>{output}</h2>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default App;
