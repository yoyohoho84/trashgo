import { Box, Text } from '@mantine/core';

import { useStyles } from './styles';

export const NotFound = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Text size="xl" fw={500} className={classes.text}>
        Упс! Что-то пошло не так, этой страницы не существует
      </Text>
    </Box>
  );
};
