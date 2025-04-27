import { Box } from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';

import { CardWithBlur } from 'shared/components';

import { useStyles } from './styles';

export const Result = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <CardWithBlur
        text="Ваша заявка успешно отправлена!"
        subtitle="Ссылка на приложение скоро придет на вашу почту или в Telegram."
        icon={<IconCircleCheck size={40} color="#FFF36A" />}
      />
    </Box>
  );
};
