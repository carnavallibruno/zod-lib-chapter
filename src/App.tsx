import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useState } from 'react'
import './styles/global.css'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  password: z.string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>


function App() {
  const [output, setOutput] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col items-center justify-center gap-[5vh]'>

        <form
          onSubmit={handleSubmit(createUser)}
          className='flex flex-col items-center w-full max-w-xs h-[40vh] gap-10'
        >
          <div className='flex flex-col w-full'>
            <label htmlFor="email">Email</label>
            <input
              className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
              {...register('email')}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
              {...register('password')}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button type="submit" className='w-full h-10 rounded font-semibold text-white bg-emerald-500 mt-5'>Save</button>
        </form>

        <pre>{output}</pre>
      </main>
    </>
  )
}

export default App
