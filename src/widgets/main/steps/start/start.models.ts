import { Dispatch, SetStateAction } from 'react';

import { StepsEnum } from '~/shared/types/enums';

export interface IStartFormData {
  surname: string;
  name: string;
  email: string;
  telegram: string;
}

export interface IStartProps {
  setStep: Dispatch<SetStateAction<StepsEnum>>;
}
