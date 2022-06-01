import React, { ReactHTML } from 'react';
import { createUseStyles, cnj } from '@core/utils/makeStyle';

interface CompProps {
  as?: keyof ReactHTML;
}

type AsType = CompProps['as'];
// @ts-ignore
type DynamicProps = CompProps & ReactHTML[AsType];

export interface FlexComponentProps extends DynamicProps {
  className?: string;
  children?: any;
}

const FlexComponent: React.FC<FlexComponentProps> = ({
  className,
  children,
  as: HtmlTag = 'div',
}) => {
  const classes = useStyles();

  return (
    <HtmlTag className={cnj(classes.flexComponentRoot, className)}>
      {children}
    </HtmlTag>
  );
};

const useStyles = createUseStyles({
  flexComponentRoot: {},
});

export default FlexComponent;
