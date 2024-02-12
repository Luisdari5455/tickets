// src/components/Login.jsx
import React from 'react';
import { Button, TextField, Typography, Paper, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignIn.css'; // Asegúrate de importar la hoja de estilos CSS

// Esquema de validación de Yup
const schema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <Box className="login-container">
            <Paper elevation={6} className="login-paper">
                <Typography component="h1" variant="h5" align="center">
                    Ingresar
                </Typography>
                <Box component="form" className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ' '}
                                FormHelperTextProps={{ className: "text-field-error" }}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ' '}
                                FormHelperTextProps={{ className: "text-field-error" }}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="login-button"
                    >
                        Ingresar
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
