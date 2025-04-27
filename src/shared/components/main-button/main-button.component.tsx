import { FC, forwardRef } from 'react';

import { Box, Text, createPolymorphicComponent } from '@mantine/core';

import cn from 'classnames';

import { IMainButtonProps } from './main-button.model';
import { useStyles } from './styles';

export const MainButton = createPolymorphicComponent<
  'button' | 'a',
  IMainButtonProps
>(
  forwardRef<HTMLButtonElement | HTMLAnchorElement, IMainButtonProps>(
    ({ component = 'button', children, className, ...others }, ref) => {
      const { classes } = useStyles();
      return (
        <Box
          component={component}
          className={cn(classes.button, className)}
          {...others}
          ref={ref as any}
        >
          <Text>{children}</Text>
        </Box>
      );
    },
  ),
);
