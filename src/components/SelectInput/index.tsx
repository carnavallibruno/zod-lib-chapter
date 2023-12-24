import { forwardRef } from "react"

interface SelectInputProps {
  items: string[]
  error: string | undefined
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (props, ref) => {
    const {
      items,
      error,
      ...rest
    } = props

    return (
      <div className='flex flex-col gap-1'>
        <select
          className='border-zinc-600 bg-zinc-900 shadow-sm rounded px-3 h-10'
          ref={ref}
          {...rest}
        >
          {items.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    )
  }
)

export default SelectInput