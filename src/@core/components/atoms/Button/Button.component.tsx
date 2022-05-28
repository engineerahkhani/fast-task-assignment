import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';

export interface ButtonComponentProps {
  className?: string;
  children: any;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className,
  onClick,
  children,
  variant = 'primary',
  disabled,
}) => {
  const classes = useStyles();

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cnj(
        classes.buttonComponentRoot,
        disabled && classes.disabledButton,
        variant === 'secondary' && classes.secondaryButton,
        className
      )}
    >
      {children}
    </button>
  );
};

const useStyles = createUseStyles(
  ({ radii, fontSizes, sizes, colors }: ITheme) => ({
    buttonComponentRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: radii.xs,
      padding: [[sizes.xs, sizes.sm]],
      margin: 0,
      textDecoration: 'none',
      background: colors.primary,
      color: colors.white,
      fontFamily: 'sans-serif',
      fontSize: fontSizes['1'],
      cursor: 'pointer',
      textAlign: 'center',
    },
    secondaryButton: {
      background: colors.secondary,
    },
    disabledButton: {
      opacity: 0.5,
    },
  })
);

export default ButtonComponent;
