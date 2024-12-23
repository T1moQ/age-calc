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
	id?: string
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
			id,
			onChange,
			...rest
		},
		ref
	) => {
		return (
			<div className={cn('flex flex-col', className)}>
				<label
					htmlFor=""
					className={`mt-1 font-bold text-[12px] lg:text-[14px] text-neutral-smokey-grey tracking-[0.3em] ${
						error && 'text-primary-light-red'
					}`}
				>
					{label}
				</label>
				<input
					id={id}
					ref={ref}
					{...rest}
					type="text"
					name={name}
					onChange={onChange}
					value={value}
					maxLength={maxLength}
					placeholder={placeholder}
					required
					className={`py-2 lg:py-3.5 px-3 lg:px-5 border border-neutral-light-grey font-bold rounded-md mt-1 lg:mt-2 text-[22px] lg:text-m outline-none active:border-primary-purple ${
						error && 'border-primary-light-red'
					}`}
				/>
				{error && (
					<span
						className={`error mt-2 lg:mt-1 text-primary-light-red text-[12px] lg:text-[16px] ${
							error && ''
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
