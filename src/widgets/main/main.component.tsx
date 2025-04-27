import { useState } from 'react';

import { Box } from '@mantine/core';

import { useRedirectCheck } from 'shared/hooks';
import { StepsEnum } from 'shared/types/enums';

import { Result } from './steps/result';
import { Start } from './steps/start';
import { useStyles } from './styles';

export const Main = () => {
  const { classes } = useStyles();
  const [step, setStep] = useState<StepsEnum>(StepsEnum.start);

  return (
    <Box className={classes.root}>
      <div>Курьеры</div>
      {step === StepsEnum.start && <Start setStep={setStep} />}
      {step === StepsEnum.result && <Result />}
    </Box>
  );
};
