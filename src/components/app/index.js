import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/Global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './style';
import Header from '../Header/index';
import AddTask from '../Input';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Container>
          <Header />
          <AddTask addTask={addTask} />
        </Container>
      </>
    </ThemeProvider>
  );
}
export default App;
