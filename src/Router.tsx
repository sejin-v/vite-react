import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/test';
import Login from './pages/login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/gallery" element={<DetailCardPage />}>
          <Route path=":cardId" element={<DetailCard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
