import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const useFormSchema = () => {
  const createUserFormSchema = z.object({
    email: z.string()
      .min(1, 'Email is required')
      .email('Invalid email format'),
    password: z.string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })

  type CreateUserFormData = z.infer<typeof createUserFormSchema>

  const createUserForm = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const { register, handleSubmit, formState: { errors } } = createUserForm


  return {
    register,
    handleSubmit,
    errors
  }
}
