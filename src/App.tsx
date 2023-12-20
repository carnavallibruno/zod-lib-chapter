import { useState } from 'react'
import { useFormSchema } from './hook/useFormSchema'
import './styles/global.css'
import Input from './components/Input'

function App() {
  const [output, setOutput] = useState<string>('')

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  const {
    register,
    handleSubmit,
    errors
  } = useFormSchema()

  return (
    <>
      <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col items-center justify-center gap-[5vh]'>

        <form
          onSubmit={handleSubmit(createUser)}
          className='flex flex-col items-center w-full max-w-xs h-[40vh] gap-10'
        >
          <Input
            label='Email'
            type='email'
            error={errors.email?.message}
            register={{...register('email')}}
          />

          <Input
            label='Password'
            type='password'
            error={errors.password?.message}
            register={{...register('password')}}
          />

          <button type="submit" className='w-full h-10 rounded font-semibold text-white bg-emerald-500 mt-5'>Save</button>
        </form>

        <pre>{output}</pre>
      </main>
    </>
  )
}

export default App
