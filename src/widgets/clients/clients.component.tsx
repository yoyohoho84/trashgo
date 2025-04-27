import { useState } from 'react';

import { Box } from '@mantine/core';

import { StepsEnum } from 'shared/types/enums';

import { Result, Start } from './steps';
import { useStyles } from './styles';

export const Clients = () => {
  const { classes } = useStyles();
  const [step, setStep] = useState<StepsEnum>(StepsEnum.start);

  return (
    <Box className={classes.root}>
      <div>Клиенты</div>
      {step === StepsEnum.start && <Start setStep={setStep} />}
      {step === StepsEnum.result && <Result />}
    </Box>
  );
};
