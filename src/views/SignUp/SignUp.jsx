// src/components/SignUp.jsx
import React from 'react';
import { Button, TextField, Typography, Paper, Box, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignUp.css'; // Asume que creaste una hoja de estilos similar a Login.css

// Esquema de validación de Yup
const schema = yup.object({
    firstName: yup.string().required('Nombres requeridos'),
    lastName: yup.string().required('Apellidos requeridos'),
    email: yup.string().email('Correo electronico invalido').required('Correo electronico requerido'),
    role: yup.string().required('Rol requerido'),
}).required();

const roles = [
    { value: 'caja', label: 'caja' },
    { value: 'admin', label: 'Admin' },
    { value: 'secretaria', label: 'secretaria' },
];

const SignUp = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
        // Aquí manejarías el envío de datos del formulario, como enviarlos a un backend
    };

    return (
        <Box className="signup-container">
            <Paper elevation={6} className="signup-paper">
                <Typography component="h1" variant="h5" align="center">
                    Registrarse
                </Typography>
                <Box component="form" className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Nombres"
                                autoComplete="fname"
                                autoFocus
                                error={!!errors.firstName}
                                helperText={errors.firstName ? errors.firstName.message : ' '}
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Apellidos"
                                autoComplete="lname"
                                error={!!errors.lastName}
                                helperText={errors.lastName ? errors.lastName.message : ' '}
                            />
                        )}
                    />
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
                                label="Correo Electronico"
                                autoComplete="email"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ' '}
                            />
                        )}
                    />
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Rol"
                                error={!!errors.role}
                                helperText={errors.role ? errors.role.message : ' '}
                            >
                                {roles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="signup-button"
                    >
                        Registrarse
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default SignUp;
