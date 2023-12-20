interface InputProps {
  label: string
  type: string
  error: string | undefined
  register: any
}

const Input = (
  {
    label,
    type,
    error,
    register
  }: InputProps
) => {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor="email">{label}</label>
      <input
        type={type}
        className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
        {...register}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}

export default Input