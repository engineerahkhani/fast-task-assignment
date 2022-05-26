import React, { useState } from 'react';
import { createUseStyles } from '../../../utils/makeStyle';

const fallback = () => 'not found';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...rest }, ref) => {
    const classes = useStyles();

    const [isError, setError] = useState(false);

    const handleError = () => {
      setError(true);
    };

    return (
      <img
        ref={ref}
        {...rest}
        className={classes.imageComponentRoot}
        src={isError ? fallback() : src}
        onError={handleError}
      />
    );
  }
);
const useStyles = createUseStyles({
  imageComponentRoot: {
    width: 250,
    height: 'auto',
  },
});
export default Image;
