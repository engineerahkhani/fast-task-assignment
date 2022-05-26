import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';

export interface TextComponentProps {
  className?: string;
  children: any;
}

const TextComponent: React.FC<TextComponentProps> = ({
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <span className={cnj(classes.flexComponentRoot, className)}>
      {children}
    </span>
  );
};

const useStyles = createUseStyles({
  flexComponentRoot: {},
});

export default TextComponent;
