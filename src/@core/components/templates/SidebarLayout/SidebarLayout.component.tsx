import React, { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Flex from '@core/components/atoms/Flex';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
import Text from '@core/components/atoms/Text';
import { useGetCategoriesQuery } from '../../../api/categoryApi';
import SidebarLayoutLoading from './SidebarLayout.component.loading';
import AlertComponent from '../../molecules/Alert';
import useTranslation from '@core/hooks/useTranslation';

const SidebarLayout: React.FC = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery('');
  const classes = useStyles();
  const navigate = useNavigate();
  const { category } = useParams();
  const { t } = useTranslation();
  const defaultCategory = categories?.[0]?.id;

  useEffect(() => {
    if (defaultCategory && !category) {
      navigate(`/${defaultCategory}`);
    }
  }, [defaultCategory, category]);

  if (isError) {
    return (
      <AlertComponent type="Error" title={t('failed_t_load_categories')} />
    );
  }

  return (
    <Flex as="section" className={classes.sidebarLayoutRoot}>
      <Flex as="nav" className={classes.sidebarList}>
        {isLoading ? (
          <SidebarLayoutLoading />
        ) : (
          categories?.map(({ id, name }) => (
            <NavLink
              className={({ isActive }) =>
                cnj(classes.sidebarItems, isActive && classes.activeClassName)
              }
              key={id}
              to={`${id}`}
            >
              <Text color="white">{name}</Text>
            </NavLink>
          ))
        )}
      </Flex>
      <Flex className={classes.sidebarLayoutContent}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

const useStyles = createUseStyles(
  ({ zIndices, colors, sizes, radii, media }) => ({
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
