import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const TicketCreationModal = ({ open, handleClose, onSubmit }) => {
  const validationSchema = yup.object({
    dpi: yup.string().required('El DPI es requerido'),
    nombre: yup.string().required('El nombre es requerido'),
    opcion: yup.string().required('Debe seleccionar una opción'),
  });

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Crear Nuevo Ticket</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="dpi"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="DPI" fullWidth margin="normal" error={!!errors.dpi} helperText={errors.dpi?.message} />
            )}
          />
          <Controller
            name="nombre"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Nombre" fullWidth margin="normal" error={!!errors.nombre} helperText={errors.nombre?.message} />
            )}
          />
          <Controller
            name="opcion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth margin="normal" error={!!errors.opcion}>
                <InputLabel id="opcion-label">Opción</InputLabel>
                <Select
                  labelId="opcion-label"
                  {...field}
                  label="Opción"
                >
                  <MenuItem value="">Seleccionar</MenuItem>
                  <MenuItem value="opcion1">Opción 1</MenuItem>
                  <MenuItem value="opcion2">Opción 2</MenuItem>
                  <MenuItem value="opcion3">Opción 3</MenuItem>
                </Select>
                {errors.opcion && <div>{errors.opcion.message}</div>}
              </FormControl>
            )}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Crear
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TicketCreationModal;
