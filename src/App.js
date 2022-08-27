import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./App.css";
import Combinations from "./screens/Combinations";
import LandingPage from "./screens/LandingPage";
import SavedProducts from "./screens/SavedProducts";
import Header from "./components/Header";
import Celebrities from './screens/Celebrities';
import Themes from './screens/Themes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider>
          <RecoilRoot>
            {/* <Header /> */}
            <Box className="container">
              <Routes>
                <Route path="/home" element={<LandingPage />} />
                <Route path="/combinations" element={<Combinations />} />
                <Route path="/saved" element={<SavedProducts />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/celebrities" element={<Celebrities />} />
              </Routes>
            </Box>
          </RecoilRoot>
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
