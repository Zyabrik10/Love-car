import Layout from 'layout/Layout';
import { Home, Favorites, Cars, ErrorPage } from 'pages/index';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
