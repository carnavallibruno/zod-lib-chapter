import { forwardRef } from "react"

interface InputProps {
  label?: string
  type: string
  error: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      type,
      error,
      ...rest
    } = props

    return (
      <div className='flex flex-col w-full'>
        <label htmlFor="email">{label}</label>
        <input
          type={type}
          className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
          ref={ref}
          {...rest}
        />
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    )
  }
)


export default Input