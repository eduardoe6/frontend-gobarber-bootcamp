import React from 'react';
import AppProvider from './hooks';
import SignIn from './pages/SigIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
