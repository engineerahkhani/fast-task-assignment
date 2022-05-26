import React from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';

export interface FlexComponentProps {
  className?: string;
  children?: any;
}

const FlexComponent: React.FC<FlexComponentProps> = ({
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={cnj(classes.flexComponentRoot, className)}>{children}</div>
  );
};

const useStyles = createUseStyles({
  flexComponentRoot: {},
});

export default FlexComponent;
