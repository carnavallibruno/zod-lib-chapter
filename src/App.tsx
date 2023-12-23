import { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { useFormSchema } from './hook/useFormSchema'
import './styles/global.css'

function App() {
  const [output, setOutput] = useState<string>('')

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  const {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove
  } = useFormSchema()

  function addGame() {
    append({ name: '', skill: '--' })
  }

  const gameSkillsOptions = [
    '--',
    'None',
    'Noob',
    'Normal',
    'Hardcore'
  ]

  return (
    <>
      <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col items-center justify-center gap-[5vh]'>

        <form
          onSubmit={handleSubmit(createUser)}
          className='flex flex-col items-center w-full max-w-xs gap-10'
        >
          <div className='flex flex-col w-full'>
            <label htmlFor="email">Email</label>
            <input
              type='text'
              className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
              {...register('email')}
            />
            {errors.email && <span className="text-xs text-red-600">{errors.email?.message}</span>}
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor="email">Password</label>
            <input
              type='password'
              className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
              {...register('password')}
            />
            {errors.password && <span className="text-xs text-red-600">{errors.password?.message}</span>}
          </div>

          <div className='w-full flex flex-col gap-1'>
            <div className='flex justify-between items-center'>
              <label htmlFor=''>Games</label>
              <button
                className='text-emerald-500 text-sm'
                type='button'
                onClick={addGame}
              >
                Add
              </button>
            </div>

            {fields.map((field, index) => {
              return (
                <div key={field.id} className='w-full flex justify-between items-center gap-2'>
                  <div className='flex flex-col gap-1 w-[60%]'>
                    <input
                      type='text'
                      className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
                      {...register(`games.${index}.name`)}
                    />

                    {errors.games?.[index]?.name && <span className="text-xs text-red-600">{errors.games?.[index]?.name?.message}</span>}
                  </div>

                  <div className='flex flex-col gap-1'>
                    <select
                      className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
                      {...register(`games.${index}.skill`)}
                    >
                      {gameSkillsOptions.map((skill, index) => (
                        <option key={index} value={skill}>{skill}</option>
                      ))}
                    </select>
                    {errors.games?.[index]?.skill && <span className="text-xs text-red-600">{errors.games?.[index]?.skill?.message}</span>}
                  </div>
                  {fields.length > 1 &&
                    <button
                      className={(errors.games?.[index]?.name || errors.games?.[index]?.skill) && 'mb-5'}
                      type='button'
                      onClick={() => remove(index)}>
                      <IoMdClose
                        color="red"
                      />
                    </button>
                  }
                </div>
              )
            })}
          </div>


          <button type="submit" className='w-full h-10 rounded font-semibold text-white bg-emerald-500 mt-5'>Save</button>
        </form>

        <pre>{output}</pre>
      </main>
    </>
  )
}

export default App
