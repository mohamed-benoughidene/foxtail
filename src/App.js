import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import LoadingPage from './components/LoadingPage';

const Home = lazy(() => import('./pages/Home'));
const Page404 = lazy(() => import('./pages/Page404'));

function App() {
  const theme = {
    token: {
      fontFamily: 'Roboto, sans-serif',
      controlOutline: 'transparent',
      
    },
    algorithm: ConfigProvider.defaultAlgorithm,
  };

  

  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
