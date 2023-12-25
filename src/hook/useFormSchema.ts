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
    confirmWord: z.literal('Chewbacca')
      .refine(value => value === 'Chewbacca', 'Confirm word must be Chewbacca')
    ,
    games: z.array(z.object({
      name: z.string().min(1, 'Game name is required'),
      skill: z.enum(['--', 'None', 'Noob', 'Normal', 'Hardcore'])
        .refine(value => value !== '--', 'Skill level is required')
    }))
    ,
    profilePicture: z.instanceof(FileList)
      .refine(value => value.length > 0, 'Profile picture is required')
      .transform(list => list.item(0))
      .refine(file => file!.size <= 5 * 1024 * 1024, 'Profile picture must be less than 5MB')
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
