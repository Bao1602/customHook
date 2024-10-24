import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, Typography } from '@mui/material';

function App() {
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [logType, setLogType] = useState('LOG');
  const [consoleOutput, setConsoleOutput] = useState([]);

  const useLogger = (scope,logType,message) => {
    const currTime = new Date().toLocaleTimeString();
    let logMessage = `[${scope}] [${currTime}] ${message}` ;

    {/* render previous one in the array and add a new logmessage*/}
    setConsoleOutput((prev) => [...prev,logMessage]);
    
    console[logType](logMessage);
  }

  const handleSubmit = () => {
    useLogger(scope,logType,message);
    setScope('');
    setMessage('');
    //alert("SUCCESS");
  }


  return (
    <Box sx={{ width: '100%', padding: '10px' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: '20px' }}>
        {/* the scope */}
        <TextField
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder='SCOPE'
        />
        {/* Log */}
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
    {/* Message */}
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message here'
      />

      <Box sx={{ margintop: '20px',padding: '10px', border: '1px solid black'}}>
        <Typography>Console</Typography>
        <div>
          {consoleOutput.map((output,index) => (
            <h2 key={index}> {output} </h2>
          ))}
        </div>      
      </Box>
    </Box>
  );
}

export default App;
