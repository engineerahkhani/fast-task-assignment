import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import SidebarLayout from '@core/components/templates/SidebarLayout';
import loadable from '@loadable/component';

const CatsList = loadable(() => import('./screens/CatsList'));
const Home = loadable(() => import('./screens/Home'));
const NotFound = loadable(() => import('./screens/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route index element={<Home />} />
        <Route path=":category" element={<CatsList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
