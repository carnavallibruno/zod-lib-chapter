import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

export const useFormSchema = () => {

  const createUserFormSchema = z.object({
    email: z.string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .refine(value => {
        return value.endsWith('@compasso.com.br')
      }, 'E-mail address must be from Compass')
    ,
    password: z.string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
    ,
    games: z.array(z.object({
      name: z.string().min(1, 'Game name is required'),
      skill: z.enum(['--', 'None', 'Noob', 'Normal', 'Hardcore'])
        .refine(value => value !== '--', 'Skill level is required')
    }))
  })

  type CreateUserFormData = z.infer<typeof createUserFormSchema>

  const createUserForm = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = createUserForm

  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'games'
  })

  return {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove
  }
}
