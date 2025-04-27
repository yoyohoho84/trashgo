import { FC } from 'react';

import { Text } from '@mantine/core';

import { MainButton } from '../main-button';
import { CardWithBlurProps } from './card-with-blur.model';
import { useStyles } from './styles';

export const CardWithBlur: FC<CardWithBlurProps> = ({
  text,
  hasActionButton,
  onActionClick,
  icon,
  subtitle,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {icon && icon}

      <Text fw={500} className={classes.text}>
        {text}
      </Text>

      {hasActionButton && (
        <MainButton onClick={onActionClick} size="lg">
          Узнать свое предсказание
        </MainButton>
      )}

      {subtitle && (
        <Text fw={400} className={classes.subtitle}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};
