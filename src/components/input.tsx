import { forwardRef } from 'react'
import cn from 'classnames'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
	label: string
	className?: string
	maxLength?: number
	placeholder?: string
	value?: string
	name?: string
	error: FieldError
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & UseFormRegisterReturn

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			className,
			maxLength,
			placeholder,
			value,
			name,
			error,
			onChange,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn('flex flex-col', className)}>
				<label
					htmlFor=""
					className={`mt-1 font-bold text-[12px] text-neutral-smokey-grey tracking-[0.3em] ${
						error && 'text-primary-light-red'
					}`}
				>
					{label}
				</label>
				<input
					ref={ref}
					{...rest}
					type="text"
					name={name}
					onChange={onChange}
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
					required
					className={`py-2 px-3 border border-neutral-light-grey font-bold rounded-md mt-1 text-[22px] outline-none active:border-primary-purple ${
						error && 'border-primary-light-red'
					}`}
				/>
				{error && (
					<span
						className={`error mt-2 text-primary-light-red text-[12px] ${
							error && 'mb-4'
						}`}
					>
						{error.message}
					</span>
				)}
			</div>
		)
	}
)

Input.displayName = 'Input'
