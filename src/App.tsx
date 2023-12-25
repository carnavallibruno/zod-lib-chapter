import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useFormSchema } from './hook/useFormSchema'
import Input from './components/Input'
import SelectInput from './components/SelectInput'
import './styles/global.css'

function App() {
  const [output, setOutput] = useState<string>('')

  const createUser = (data: any) => {
    console.log(data.profilePicture)

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
      <main className='min-h-screen text-zinc-300 flex flex-col items-center justify-center overflow-auto'>
        <form
          onSubmit={handleSubmit(createUser)}
          className='flex flex-col items-center w-full max-w-xs gap-10'
        >
          <Input
            label='Email'
            type='text'
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label='Password'
            type='password'
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            label='Confirm Word'
            type='text'
            error={errors.confirmWord?.message}
            {...register('confirmWord')}
          />

          <div className='w-full flex flex-col gap-1'>
            <div className='flex justify-between items-center'>
              <label htmlFor=''>Games</label>
              <button
                className='text-[#ffce00] text-sm'
                type='button'
                onClick={addGame}
              >
                Add
              </button>
            </div>

            {fields.map((field, index) => {
              return (
                <div
                  key={field.id}
                  className='w-full flex justify-between items-center gap-2'
                >
                  <Input
                    type='text'
                    error={errors.games?.[index]?.name?.message}
                    {...register(`games.${index}.name`)}
                  />

                  <SelectInput
                    items={gameSkillsOptions}
                    error={errors.games?.[index]?.skill?.message}
                    {...register(`games.${index}.skill`)}
                  />

                  <button
                    className={errors.games?.[index] && 'mb-5'}
                    type='button'
                    onClick={() => remove(index)}
                  >
                    <IoMdClose color="red" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-1">
            <label htmlFor="">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              {...register("profilePicture")}
            />
            {errors.profilePicture && <span className="text-red-500 text-sm">{errors.profilePicture.message}</span>}
          </div>

          <button
            type="submit"
            className='w-full h-10 rounded font-semibold text-white border-[1px] border-[#ffce00] hover:text-black hover:bg-[#ffce00] mt-5'
          >
            Save
          </button>
        </form>

        {output && <pre className='mt-10'>{output}</pre>}
      </main>
    </>
  )
}

export default App
