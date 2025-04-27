import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  button: {
    width: '260px',
    backgroundColor: '#FFF374',
    borderRadius: '48px',
    fontSize: '16px',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    boxShadow:
      '0 4px 64px rgba(255, 243, 106, 0.16), 0 4px 32px rgba(255, 243, 106, 0.16)',
    padding: '20px 24px',

    '&:hover': {
      backgroundColor: '#ffff8d',
      boxShadow:
        '0 4px 64px rgba(255, 243, 106, 0.4), 0 4px 32px rgba(255, 243, 106, 0.4), 0 0 16px rgba(255, 243, 106, 0.8)',
    },
  },
}));
