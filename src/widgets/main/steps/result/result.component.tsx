import { Box, Space } from '@mantine/core';

import { IconCircleCheck } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

import { CardWithBlur, MainButton } from 'shared/components';
import { numberToWords, timeToWords } from 'shared/utils';

export const Result = () => {
  const location = useLocation();

  const projectName =
    location.pathname === '/' ? 'main' : location.pathname.replace('/', '');

  const handleClick = () => {
    // todo
  };

  return (
    <Box>
      <CardWithBlur
        text="Ваша заявка успешно отправлена!"
        subtitle="Ссылка на приложение скоро придет на вашу почту или в Telegram."
        icon={<IconCircleCheck size={40} color="#FFF36A" />}
      />
    </Box>
  );
};
