import Input from './components/Input'
import './styles/global.css'

function App() {
  return (
    <>
      <main className='min-h-screen text-zinc-300 flex flex-col items-center justify-center overflow-auto'>
        <form
          className='flex flex-col items-center w-full max-w-xs gap-10'
        >
          <Input
            label='Email'
            type='text'
          />

          <Input
            label='Password'
            type='password'
          />

          <button
            type="submit"
            className='w-full h-10 rounded font-semibold text-white border-[1px] border-[#ffce00] hover:text-black hover:bg-[#ffce00] mt-5'
          >
            Save
          </button>
        </form>
      </main>
    </>
  )
}

export default App