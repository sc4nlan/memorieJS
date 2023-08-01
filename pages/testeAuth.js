import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormularioSenha() {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm();

  const onSubmit = (data) => {
    // Lide com o envio do formulário aqui
  };

  const watchPassword = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Senha</label>
        <input
          type="password"
          name="password" // Correto: definir o "name" aqui
          ref={register({
            required: 'Este campo é obrigatório',
            minLength: {
              value: 8,
              message: 'A senha deve ter pelo menos 8 caracteres',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirmar Senha</label>
        <input
          type="password"
          name="confirmPassword" // Correto: definir o "name" aqui
          ref={register({
            validate: (value) =>
              value === watchPassword || 'As senhas não coincidem',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
