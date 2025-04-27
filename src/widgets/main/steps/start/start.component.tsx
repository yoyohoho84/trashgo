import { FC } from 'react';

import { Box, Button, Flex, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { observer } from 'mobx-react-lite';

import { useStores } from 'app/store/use-stores';
import { StepsEnum } from 'shared/types/enums';

import { IStartFormData, IStartProps } from './start.models';
import { START_FORM_VALIDATION } from './start.validation';

const placeholders: Record<keyof IStartFormData, string> = {
  surname: 'Фамилия',
  name: 'Имя',
  email: 'Электронная почта',
  telegram: 'Телеграм (@username)',
};

export const Start: FC<IStartProps> = observer(({ setStep }) => {
  const { InfoFormStore } = useStores();

  const form = useForm<IStartFormData>({
    initialValues: {
      surname: '',
      name: '',
      email: '',
      telegram: '',
    },
    validate: START_FORM_VALIDATION,
  });

  const handleSubmit = form.onSubmit(
    (values) => {
      console.log('✅ Успешная отправка', values);
      InfoFormStore.setData(values);

      setStep(StepsEnum.result);
    },
    (errors) => {
      console.log('❌ Ошибки в форме', errors);
    },
  );

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="md" mt={16} w="100%">
          <TextInput
            withAsterisk
            label="Фамилия"
            placeholder="Введите фамилию"
            {...form.getInputProps('surname')}
          />

          <TextInput
            withAsterisk
            label="Имя"
            placeholder="Введите имя"
            {...form.getInputProps('name')}
          />

          <TextInput
            withAsterisk
            label="Электронная почта"
            placeholder="Введите эл.почту"
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label="Телеграм (@username)"
            placeholder="Введите свой телеграм"
            {...form.getInputProps('telegram')}
          />
        </Flex>

        <Group position="right" mt="md">
          <Button type="submit" color="button.0" sx={{ fontWeight: 500 }}>
            Далее
          </Button>
        </Group>
      </form>
    </Box>
  );
});
