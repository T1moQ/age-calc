import { FC } from 'react'
import { Input } from './input'

export const Calculator: FC = () => {
	return (
		<main className="mt-[88px] py-10 px-6 bg-neutral-white rounded-3xl">
			<form action="submit" className="flex gap-4 mt-1">
				<Input label="DAY" className="w-[86px]" />
				<Input label="MONTH" className="w-[86px]" />
				<Input label="YEAR" className="w-[86px]" />
			</form>
		</main>
	)
}
