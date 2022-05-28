import React, { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Flex from '@core/components/atoms/Flex';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';
import Text from '@core/components/atoms/Text';
import { useGetCategoriesQuery } from '../../../api/categoryApi';

const SidebarLayout: React.FC = () => {
  const { data: categories } = useGetCategoriesQuery('');
  const classes = useStyles();
  const navigate = useNavigate();
  const { category } = useParams();

  const defaultCategory = categories?.[0]?.id;

  useEffect(() => {
    if (defaultCategory && !category) {
      navigate(`/${defaultCategory}`);
    }
  }, [defaultCategory, category]);

  return (
    <Flex className={classes.sidebarLayoutRoot}>
      <nav className={classes.sidebarList}>
        {categories?.map(({ id, name }) => (
          <NavLink
            className={({ isActive }) =>
              cnj(classes.sidebarItems, isActive && classes.activeClassName)
            }
            key={id}
            to={`${id}`}
          >
            <Text color="white">{name}</Text>
          </NavLink>
        ))}
      </nav>
      <Flex className={classes.sidebarLayoutContent}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

const useStyles = createUseStyles(
  // @ts-ignore
  ({ zIndices, colors, sizes, radii, media }: ITheme) => ({
    sidebarLayoutRoot: {
      display: 'flex',
      flexDirection: 'column',
    },
    sidebarList: {
      padding: sizes.xs,
      background: colors.darkBackground,
      borderRadius: radii.lg,
      display: 'flex',
      flexDirection: 'row',
      overflow: 'scroll',
      marginBottom: sizes.md,
    },
    sidebarLayoutContent: {
      background: colors.lightBackground,
      borderRadius: radii.sm,
      display: 'flex',
      flex: 1,
      marginLeft: 0,
    },
    sidebarItems: {
      padding: [[sizes.sm, sizes.lg]],
      '&:hover': {
        background: colors.lightBackground,
      },
      '&:active, &:focus': {
        background: colors.primary,
      },
    },
    activeClassName: {
      background: colors.primary,
    },
    [media.tablet]: {
      sidebarLayoutContent: {
        marginLeft: sizes.sideBarWidth + sizes.md,
      },
      sidebarLayoutRoot: {
        flexDirection: 'row',
      },
      sidebarList: {
        padding: [[sizes.xlg, 0]],
        borderRadius: radii.lg,
        flexDirection: 'column',
        width: sizes.sideBarWidth,
        position: 'fixed',
        zIndex: zIndices['1'],
        top: sizes.md,
        left: sizes.md,
        overflowX: 'hidden',
      },
    },
  })
);

export default SidebarLayout;
