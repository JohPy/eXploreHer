import React from 'react';
import { Box, Typography } from '@mui/material';

import BookIcon from './Icons/BookIcon.jsx';

const ChapterHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#AC2C5F',
        color: 'white',
        borderRadius: '16px',
        paddingX: 2,
        pt: 1,
        pb: 2,
        boxShadow: 1,
        maxWidth: 800,
        mt: 4,
        mx: 1,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }} >
        <Typography variant="subtitle2"   sx={{ 
            textTransform: 'uppercase',
            opacity: 0.6,
            fontSize: '1.3rem',
            marginBottom: '0rem !important',
          }}
        >
          Kapitel 1
        </Typography>
        <Typography variant="h5">
          Der Menstruationszyklus
        </Typography>
      </Box>
      <Box sx={{ marginLeft: 2 }}>
        <BookIcon width={35} height={35} />
      </Box>
    </Box>
  );
};

export default ChapterHeader;
