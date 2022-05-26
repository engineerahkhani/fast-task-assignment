import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import { useTheme } from 'react-jss';

export interface ButtonComponentProps {
  className?: string;
  children: any;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className,
  onClick,
  children,
  variant,
  disabled,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme, variant });

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cnj(classes.buttonComponentRoot, className)}
    >
      {children}
    </button>
  );
};

const useStyles = createUseStyles({
  buttonComponentRoot: {
    background: ({ theme, variant }: any) => theme.colors.primary,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
