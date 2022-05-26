import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Flex from '../../atoms/Flex';
import useGetCategories from '@core/hooks/api-hooks/useGetCategories';

const SidebarLoading: React.FC = () => {
  const { categories } = useGetCategories();

  return (
    <Flex>
      <nav>
        <ul>
          {categories?.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </Flex>
  );
};

export default SidebarLoading;
