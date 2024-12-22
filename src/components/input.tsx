import { FC } from 'react'
import cn from 'classnames'

type InputProps = {
	label: string
	className?: string
	maxLength?: number
	placeholder?: string
	value?: string
	name?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
	label,
	className,
	maxLength,
	placeholder,
	value,
	name,
	onChange,
}) => {
	return (
		<div className={cn('flex flex-col', className)}>
			<label
				htmlFor=""
				className="mt-1 font-bold text-[12px] text-neutral-smokey-grey tracking-[0.3em]"
			>
				{label}
			</label>
			<input
				type="text"
				name={name}
				onChange={onChange}
				value={value}
				maxLength={maxLength}
				placeholder={placeholder}
				required
				className="py-2 px-3 border-2 border-neutral-light-grey font-bold rounded-md mt-1 text-[22px] outline-none active:border-primary-purple"
			/>
		</div>
	)
}
