import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider>
          <RecoilRoot>
            App Works!!!
          </RecoilRoot>
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
