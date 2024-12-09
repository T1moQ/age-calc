import { FC } from 'react'
import cn from 'classnames'

type InputProps = {
	label: string
	className?: string
}

export const Input: FC<InputProps> = ({ label, className }) => {
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
				className="py-2 px-3 border-2 border-neutral-light-grey font-bold rounded-md mt-1 text-[22px]"
			/>
		</div>
	)
}
