import React from 'react';
import Flex from '../../atoms/Flex';
import { cnj, createUseStyles } from '@core/utils/makeStyle';
export interface AlertComponentProps {
  className?: string;
  type: 'Error' | 'EmptyList' | 'NotFound';
  title: string;
  description?: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  className,
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Flex className={cnj(classes.alertComponentRoot, className)}>
      {title}
      {description}
    </Flex>
  );
};

const useStyles = createUseStyles({
  alertComponentRoot: {},
});

export default AlertComponent;
