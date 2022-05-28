import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import CatsList from './screens/CatsList';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import SidebarLayout from '@core/components/templates/SidebarLayout';
import Text from '@core/components/atoms/Text';
import Flex from '@core/components/atoms/Flex';

export default function App() {
  return (
    <Flex>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<CatsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Flex>
  );
}
