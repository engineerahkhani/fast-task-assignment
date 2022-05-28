import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';
import { ITheme } from '../../../types/theme';

export interface TextComponentProps {
  className?: string;
  children: any;
  color?: 'primary' | 'white';
}

const TextComponent: React.FC<TextComponentProps> = ({
  children,
  ...props
}) => {
  const { className } = props;
  const classes = useStyles();

  return <span className={cnj(classes.textRoot, className)}>{children}</span>;
};

const useStyles = createUseStyles(({ fonts, colors }: ITheme) => ({
  textRoot: {
    fontStyle: 'normal',
    lineHeight: '22px',
    fontSize: 15,
    color: colors.white,
    fontWeight: 'normal',
    fontFamily: fonts.mono,
    fontSmoothing: 'antialiased',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default TextComponent;
