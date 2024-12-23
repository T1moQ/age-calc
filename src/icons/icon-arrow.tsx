import { FC, SVGAttributes } from 'react'

export const IconArrow: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 46 44"
			className={className}
		>
			<g fill="none" stroke="#FFF" strokeWidth="2">
				<path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
			</g>
		</svg>
	)
}
