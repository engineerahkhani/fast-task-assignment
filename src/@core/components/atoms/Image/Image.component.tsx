import React, { useState } from 'react';
import { cnj, createUseStyles } from '@core/utils/makeStyle';

const fallback = () => 'not found';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, className, ...rest }, ref) => {
    const classes = useStyles();

    const [isError, setError] = useState(false);

    const handleError = () => {
      setError(true);
    };

    return (
      <img
        ref={ref}
        {...rest}
        className={cnj(classes.imageComponentRoot, className)}
        src={isError ? fallback() : src}
        onError={handleError}
      />
    );
  }
);
const useStyles = createUseStyles({
  imageComponentRoot: {
    verticalAlign: 'middle',
    maxWidth: '100%',
  },
});
export default Image;
