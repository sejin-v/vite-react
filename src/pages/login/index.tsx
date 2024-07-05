import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');

  const handleInputUserId = (e: KeyboardEvent) => {
    console.log(e.target!.value);
    setUserId
  };
  const handleClickLogin = () => {
    console.log('click>>>>>');
  };

  return (
    <>
      <Box
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={20}
        sx={{ border: '2px solid grey' }}
      >
        <Stack spacing={4}>
          <div>로그인 페이지 입니다.</div>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            size="small"
            label="Id"
            value={userId}
            onChange={handleInputUserId}
          />
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            size="small"
            label="Password"
          />{' '}
          <Button variant="contained" size="large" onClick={handleClickLogin}>
            Contained
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Login;
