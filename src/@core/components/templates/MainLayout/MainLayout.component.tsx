import React from 'react';
import Flex from '../../atoms/Flex';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default MainLayout;
