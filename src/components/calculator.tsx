import { FC } from 'react'
import { Input } from './input'
import { IconArrow } from '../icons/icon-arrow'

export const Calculator: FC = () => {
	return (
		<main className="mt-[88px] py-10 px-6 bg-neutral-white rounded-3xl rounded-br-[100px]">
			<form action="submit" className="flex flex-col mt-1 relative">
				<div className="flex gap-4">
					<Input
						label="DAY"
						maxLength={2}
						className="w-[86px]"
						placeholder="DD"
					/>
					<Input
						label="MONTH"
						maxLength={2}
						className="w-[86px]"
						placeholder="MM"
					/>
					<Input
						label="YEAR"
						maxLength={4}
						className="w-[86px]"
						placeholder="YYYY"
					/>
				</div>
				<div className="mt-16 block border-t border-neutral-light-grey border " />
				<button className="bg-primary-purple w-16 h-16 rounded-full absolute left-28 top-28 flex items-center justify-center active:bg-neutral-off-black">
					<IconArrow className="w-6 h-6" />
				</button>
			</form>
			<div className="mt-[54px] flex flex-col ">
				<p className="text-[56px] font-extrabold italic">
					{' '}
					<span className="text-primary-purple">38</span> years
				</p>
				<p className="text-[56px] font-extrabold italic -mt-5">
					{' '}
					<span className="text-primary-purple">3</span> months
				</p>
				<p className="text-[56px] font-extrabold italic -mt-5">
					{' '}
					<span className="text-primary-purple">26</span> days
				</p>
			</div>
		</main>
	)
}
