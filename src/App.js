
import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material';
import Menu from './components/Menu'
import './App.css';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [displayMode, setDisplayMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar displayMode={displayMode} setDisplayMode={setDisplayMode} />
        <Container maxWidth='xl'>
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Menu />
            <Content />
            <RightBar />
          </Stack>
        </Container>

      </Box>

    </ThemeProvider>
  );

}

export default App;
