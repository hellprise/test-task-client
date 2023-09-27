import { FC } from 'react'

import { IIconProps } from './icon.interface'

export const Icon: FC<IIconProps> = ({ icon, className, ...props }) => {
	switch (icon) {
		case 'search':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='magnifyingglass'>
						<path
							id='magnifyingglass_2'
							d='M10.7419 16.3141C11.9397 16.3141 13.0622 15.9525 13.9964 15.3348L17.296 18.642C17.5145 18.8529 17.7933 18.9584 18.0946 18.9584C18.7199 18.9584 19.1794 18.4687 19.1794 17.851C19.1794 17.5647 19.0815 17.2859 18.8705 17.075L15.5935 13.7829C16.2715 12.8186 16.6708 11.6509 16.6708 10.3853C16.6708 7.12327 14.0039 4.45642 10.7419 4.45642C7.48745 4.45642 4.81306 7.12327 4.81306 10.3853C4.81306 13.6473 7.47992 16.3141 10.7419 16.3141ZM10.7419 14.7321C8.3538 14.7321 6.3951 12.7734 6.3951 10.3853C6.3951 7.99716 8.3538 6.03845 10.7419 6.03845C13.13 6.03845 15.0887 7.99716 15.0887 10.3853C15.0887 12.7734 13.13 14.7321 10.7419 14.7321Z'
							fill='#181818'
						/>
					</g>
				</svg>
			)

		case 'bag':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='bag'>
						<path
							id='bag_2'
							d='M7.66071 18.755H16.5201C17.974 18.755 18.8178 17.9112 18.8178 16.2991V8.50192C18.8178 6.88975 17.9665 6.046 16.3393 6.046H15.2771C15.2394 4.3585 13.8005 2.95728 12 2.95728C10.207 2.95728 8.76059 4.3585 8.72293 6.046H7.66071C6.03347 6.046 5.18219 6.88975 5.18219 8.50192V16.2991C5.18219 17.9112 6.03347 18.755 7.66071 18.755ZM12 4.2907C13.0321 4.2907 13.793 5.06665 13.8231 6.046H10.1769C10.207 5.06665 10.9679 4.2907 12 4.2907ZM7.75864 17.2558C7.06556 17.2558 6.68135 16.8942 6.68135 16.1635V8.63752C6.68135 7.91431 7.06556 7.5527 7.75864 7.5527H16.2413C16.9269 7.5527 17.3186 7.91431 17.3186 8.63752V16.1635C17.3186 16.8942 16.9269 17.2558 16.4221 17.2558H7.75864Z'
							fill='#181818'
						/>
					</g>
				</svg>
			)

		case 'person':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='person'>
						<path
							id='person_2'
							d='M12 11.8695C13.8231 11.8695 15.2997 10.2573 15.2997 8.28353C15.2997 6.3399 13.8231 4.79553 12 4.79553C10.1844 4.79553 8.69281 6.3625 8.70034 8.2986C8.70788 10.2648 10.1769 11.8695 12 11.8695ZM12 10.5511C10.9604 10.5511 10.079 9.56423 10.079 8.2986C10.0714 7.06311 10.9529 6.11389 12 6.11389C13.0547 6.11389 13.921 7.04804 13.921 8.28353C13.921 9.54916 13.0472 10.5511 12 10.5511ZM7.29912 18.8756H16.6934C17.9967 18.8756 18.6219 18.4613 18.6219 17.5723C18.6219 15.5006 16.038 12.7434 12 12.7434C7.96206 12.7434 5.37054 15.5006 5.37054 17.5723C5.37054 18.4613 5.99582 18.8756 7.29912 18.8756ZM7.06558 17.5573C6.88477 17.5573 6.81697 17.497 6.81697 17.3614C6.81697 16.2088 8.67774 14.0617 12 14.0617C15.3147 14.0617 17.1755 16.2088 17.1755 17.3614C17.1755 17.497 17.1077 17.5573 16.9269 17.5573H7.06558Z'
							fill='#181818'
						/>
					</g>
				</svg>
			)

		case 'arrow-right':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='arrow.right'>
						<path
							id='arrow.right_2'
							d='M19.1267 11.6962C19.1267 11.4627 19.0287 11.2367 18.8555 11.0709L13.906 6.12143C13.7101 5.93309 13.5067 5.85022 13.2958 5.85022C12.8136 5.85022 12.4671 6.18923 12.4671 6.64877C12.4671 6.88984 12.565 7.09324 12.7157 7.24391L14.4107 8.96155L16.5954 10.9579L14.8476 10.8525H5.71707C5.21232 10.8525 4.86578 11.199 4.86578 11.6962C4.86578 12.1859 5.21232 12.5324 5.71707 12.5324H14.8476L16.5954 12.4269L14.4107 14.4233L12.7157 16.141C12.565 16.2916 12.4671 16.495 12.4671 16.7361C12.4671 17.1956 12.8136 17.5347 13.2958 17.5347C13.5067 17.5347 13.7101 17.4518 13.8909 17.2785L18.8555 12.3139C19.0287 12.1482 19.1267 11.9222 19.1267 11.6962Z'
							fill='#181818'
						/>
					</g>
				</svg>
			)

		case 'play':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='play.circle.fill'>
						<path
							id='play.circle.fill_2'
							d='M11.9925 19.4933C16.264 19.4933 19.7896 15.9676 19.7896 11.7037C19.7896 7.43973 16.2564 3.91406 11.9849 3.91406C7.72099 3.91406 4.20285 7.43973 4.20285 11.7037C4.20285 15.9676 7.72852 19.4933 11.9925 19.4933ZM15.036 12.1482L10.5234 14.7924C10.1543 15.0109 9.72489 14.8225 9.72489 14.4459V8.97656C9.72489 8.59235 10.1769 8.41909 10.5234 8.62249L15.036 11.2818C15.3599 11.4777 15.3675 11.9523 15.036 12.1482Z'
							fill='#E8E8E8'
						/>
					</g>
				</svg>
			)

		case 'planet':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='globe.asia.australia'>
						<path
							id='globe.asia.australia_2'
							d='M12 19.4858C16.2565 19.4858 19.7821 15.9677 19.7821 11.7037C19.7821 7.4473 16.2565 3.92163 11.9925 3.92163C7.73609 3.92163 4.21796 7.4473 4.21796 11.7037C4.21796 15.9677 7.74363 19.4858 12 19.4858ZM9.92834 11.1236L9.15992 9.99362C8.73051 9.35327 8.03743 9.1122 7.33682 9.45121L6.74921 9.74501C6.26706 9.97855 6.07119 10.3477 6.07119 11.0257C6.07119 11.5606 5.91299 11.8167 5.59658 11.8167C5.53632 11.8167 5.47605 11.8092 5.42331 11.7941C5.42331 11.764 5.42331 11.7339 5.42331 11.7037C5.42331 8.11025 8.39904 5.12699 11.9925 5.12699C12.5123 5.12699 13.0171 5.19479 13.5067 5.30779C13.2657 5.74473 12.8589 5.97074 12.8589 6.58848C12.8589 7.71097 14.3505 7.6281 14.3505 8.87866C14.3505 9.63201 13.7553 9.98608 12.4445 9.98608C11.6836 9.98608 11.1638 10.3854 11.1638 10.9805C11.1638 11.3798 11.3672 11.651 11.8117 11.8845C12.0452 11.99 12.1356 12.1105 12.1356 12.2763C12.1356 12.4721 11.9925 12.5776 11.759 12.5776C11.2618 12.5776 10.6139 12.1407 9.92834 11.1236ZM12 18.2804C8.76065 18.2804 6.02599 15.8622 5.51372 12.7584C5.55138 12.7584 5.58905 12.7584 5.63425 12.7584C6.4328 12.7584 6.97521 12.0729 6.97521 11.0257C6.97521 10.7018 7.02795 10.5963 7.25395 10.4908L7.73609 10.2648C7.99223 10.1368 8.22577 10.2347 8.37644 10.4607L9.22772 11.7113C10.079 12.9543 10.9454 13.459 11.7364 13.459C12.5048 13.459 12.9719 12.9919 12.9719 12.2461C12.9719 11.8167 12.7534 11.44 12.3993 11.214C12.2788 11.1312 12.211 11.0935 12.211 11.0182C12.2034 10.9353 12.2788 10.8976 12.4069 10.8976C14.2827 10.8976 15.262 10.2121 15.262 8.87866C15.262 7.11583 13.7629 7.01789 13.7629 6.56588C13.7629 6.26454 14.1622 6.12894 14.3957 5.59406C16.829 6.56588 18.5768 8.954 18.5768 11.7037C18.5768 12.4043 18.4638 13.0899 18.2528 13.7227C17.8611 13.4063 17.5447 13.2707 17.1831 13.2707C16.8893 13.2707 16.7311 13.346 16.5578 13.3988C16.4147 13.4515 16.3469 13.3912 16.3243 13.2556C16.2414 12.6906 15.8949 12.4797 15.3374 12.4797H14.9456C14.4936 12.4797 14.1245 12.7132 13.8457 13.1426L13.7252 13.3309C13.5293 13.6323 13.3636 13.8734 13.2054 14.0316C13.0472 14.1672 12.9191 14.235 12.6103 14.3329L12.2637 14.4384C11.7439 14.6041 11.5782 15.0637 11.7213 15.5759L12.0904 16.8491C12.2185 17.3162 12.4973 17.5572 12.9493 17.5572C13.1451 17.5572 13.3862 17.4894 13.6423 17.3689L13.7553 17.3086C13.9211 17.2258 14.0492 17.1956 14.1848 17.1956C14.471 17.1956 14.6744 17.3388 14.8854 17.5949C14.0115 18.0318 13.0321 18.2804 12 18.2804ZM14.1697 16.3217C13.9361 16.3217 13.6649 16.4046 13.3711 16.5251L13.1451 16.608C13.0246 16.6532 12.9417 16.6457 12.9116 16.5327L12.5877 15.4479C12.5575 15.3349 12.6027 15.2671 12.7157 15.2294C13.2883 15.0637 13.5971 14.8452 13.793 14.6568C14.0944 14.363 14.343 13.9487 14.5614 13.6323C14.697 13.4214 14.8025 13.346 14.9381 13.346H15.3298C15.4353 13.346 15.4579 13.3837 15.4805 13.4666C15.586 13.9939 15.8723 14.3028 16.3921 14.3028C16.7687 14.3028 16.9495 14.1446 17.1831 14.1446C17.3714 14.1446 17.5824 14.2651 17.9063 14.574C17.394 15.6136 16.603 16.5101 15.6462 17.158C15.3072 16.7285 14.8778 16.3217 14.1697 16.3217Z'
							fill='#464646'
						/>
					</g>
				</svg>
			)

		case 'hamburger':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					strokeWidth='1.5'
					stroke='currentColor'
				>
					<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
				</svg>
			)

		case 'close':
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					strokeWidth='1.5'
					stroke='currentColor'
				>
					<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
				</svg>
			)

		default:
			return (
				<svg
					className={className}
					{...props}
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='chevron.down'>
						<path
							id='chevron.down_2'
							d='M12 15.847C12.2637 15.8395 12.5048 15.7416 12.7006 15.5306L18.4261 9.66959C18.5918 9.50385 18.6822 9.29292 18.6822 9.04431C18.6822 8.5471 18.2905 8.14783 17.7933 8.14783C17.5522 8.14783 17.3186 8.24576 17.1454 8.41903L12.0075 13.7L6.85464 8.41903C6.68137 8.2533 6.45537 8.14783 6.20676 8.14783C5.70955 8.14783 5.31781 8.5471 5.31781 9.04431C5.31781 9.29292 5.40821 9.50385 5.57395 9.66959L11.3069 15.5306C11.5103 15.7416 11.7363 15.847 12 15.847Z'
							fill='#464646'
						/>
					</g>
				</svg>
			)
	}
}
