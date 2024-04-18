/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../components/FormControl/InputField';
import PasswordField from '../../components/FormControl/PasswordField';
import { useSnackbar } from 'notistack';
import Loadable from 'components/Loadable';
import { lazy } from 'react';
import { Redirect } from 'react-router';
// ================================|| LOGIN ||================================ //


function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const showNotification = (message, type) => {
    enqueueSnackbar(message, { variant: type })
  }

  const validationSchema = yup.object({
    email: yup.string().required('Nhập vào địa chỉ email!').email('Email chưa đúng định dạng'),
    password: yup.string().required('Required').min(3, 'Mat khau phai lon hon 3 ky tu')
  });

  const onSubmit = async (values) => {
    // Kiêm tra tài khoản
    if (values.email == "anhpd@utt.edu.vn") {
      showNotification('Xin chào, 1 ' + values.email, "success");
      Loadable(lazy(() => import('pages/authentication/Register')));
      console.log('hihi');

    }
    else {
      // Redirect to Home page
      console.log(values);
    }
  };


  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(validationSchema)
  });

  return (
    <AuthWrapper>
      <Box component="form" style={{ minWidth: '400px' }} onSubmit={form.handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3">Đăng nhập</Typography>

            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputField form={form} name="email" label="Tên tài khoản" />
            <PasswordField form={form} name='password' label='Mật khẩu' />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>


    </AuthWrapper>
  );
}

export default Login;
