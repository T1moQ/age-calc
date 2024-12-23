import { FC, useState } from 'react'
import { Input } from './input'
import { IconArrow } from '../icons/icon-arrow'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
	day: string
	month: string
	year: string
}

export const Calculator: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const [age, setAge] = useState<{
		years: number
		months: number
		days: number
	} | null>(null)

	const calculateAge = (day: number, month: number, year: number) => {
		const today = new Date()
		const birthDate = new Date(year, month - 1, day)
		let years = today.getFullYear() - birthDate.getFullYear()
		let months = today.getMonth() - birthDate.getMonth()
		let days = today.getDate() - birthDate.getDate()

		if (months < 0 || (months === 0 && days < 0)) {
			years--
			months += 12
		}

		if (days < 0) {
			const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
			days += prevMonth.getDate()
			months--
		}

		return { years, months, days }
	}

	const onSubmit: SubmitHandler<FormData> = ({ day, month, year }) => {
		const parsedDay = parseInt(day, 10)
		const parsedMonth = parseInt(month, 10)
		const parsedYear = parseInt(year, 10)

		const calculatedAge = calculateAge(parsedDay, parsedMonth, parsedYear)
		setAge(calculatedAge)
	}

	return (
		<main className="mt-[88px] py-10 px-6 bg-neutral-white rounded-3xl rounded-br-[100px]">
			<form
				onSubmit={handleSubmit(onSubmit)}
				action="submit"
				className="flex flex-col mt-1 relative"
			>
				<div className="flex gap-4">
					<Input
						label="DAY"
						maxLength={2}
						className="w-[86px]"
						placeholder="DD"
						{...register('day', {
							required: 'The field is required',
							pattern: {
								value: /^[0-9]+$/,
								message: 'Only numbers',
							},
							min: { value: 1, message: 'Must be a valid day' },
							max: { value: 31, message: 'Must be a valid day' },
						})}
						error={errors.day}
						name="day"
					/>
					<Input
						label="MONTH"
						maxLength={2}
						className="w-[86px]"
						placeholder="MM"
						{...register('month', {
							required: 'The field is required',
							pattern: {
								value: /^[0-9]+$/,
								message: 'Only numbers',
							},
							min: { value: 1, message: 'Must be a valid month' },
							max: { value: 12, message: 'Must be a valid month' },
						})}
						error={errors.month}
						name="month"
					/>
					<Input
						label="YEAR"
						maxLength={4}
						className="w-[86px]"
						placeholder="YYYY"
						{...register('year', {
							required: 'The field is required',
							pattern: {
								value: /^[0-9]+$/,
								message: 'Only numbers',
							},
							min: { value: 1000, message: 'Must be a valid year' },
							max: {
								value: new Date().getFullYear(),
								message: 'Must be in the past',
							},
						})}
						error={errors.year}
						name="year"
					/>
				</div>
				<div className="mt-16 block border-t border-neutral-light-grey border " />
				<button
					type="submit"
					className="bg-primary-purple w-16 h-16 rounded-full absolute left-28 top-28 flex items-center justify-center active:bg-neutral-off-black"
				>
					<IconArrow className="w-6 h-6" />
				</button>
			</form>
			<div className="mt-[54px] flex flex-col ">
				<p className="text-[52px] font-extrabold italic">
					{' '}
					<span className="text-primary-purple">{age?.years || '--'}</span>{' '}
					years
				</p>
				<p className="text-[52px] font-extrabold italic -mt-5">
					{' '}
					<span className="text-primary-purple">
						{age?.months || '--'}
					</span>{' '}
					months
				</p>
				<p className="text-[52px] font-extrabold italic -mt-5">
					{' '}
					<span className="text-primary-purple">{age?.days || '--'}</span> days
				</p>
			</div>
		</main>
	)
}
