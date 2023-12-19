import './styles/global.css'

function App() {
  return (
    <>
      <main className='h-screen bg-zinc-950 text-zinc-300 flex flex-col items-center justify-center gap-[10vh]'>

        <h1 className='text-2xl text-center'>Registration Form</h1>

        <form className='flex flex-col items-center w-full max-w-xs h-[40vh] gap-10'>
          <div className='flex flex-col w-full'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className='border-zinc-200 shadow-sm rounded px-3 h-10'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className='border-zinc-200 shadow-sm rounded px-3 h-10'
            />
          </div>

          <div className='flex flex-col w-full'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className='border-zinc-200 shadow-sm rounded px-3 h-10'
            />
          </div>

          <button type="submit" className='w-full h-10 rounded font-semibold text-white bg-emerald-500 mt-5'>Save</button>
        </form>
      </main>
    </>
  )
}

export default App
