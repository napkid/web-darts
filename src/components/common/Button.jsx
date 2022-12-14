// This file is part of WebDarts.
// WebDarts is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
// WebDarts is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
// You should have received a copy of the GNU Affero General Public License along with WebDarts. If not, see <https://www.gnu.org/licenses/>. 

import clsx from "clsx"


const buttonStyles = {
    pill: 'rounded-full before:rounded-full',
    rounded: 'rounded-lg before:rounded-lg',
    colors: {
        green: 'border-emerald-800 \
            bg-emerald-400 \
            hover:bg-emerald-500 \
            before:bg-emerald-700',
        gray: 'border-gray-600 \
            bg-gray-400 \
            hover:bg-gray-500 \
            before:bg-gray-600',
        red: 'border-red-600 \
            bg-red-500 \
            hover:bg-red-600 \
            before:bg-red-700',
        yellow: 'border-yellow-700 \
            bg-yellow-500 \
            hover:bg-yellow-600 \
            before:bg-yellow-700',
        blue: 'border-blue-600 \
            bg-blue-500 \
            hover:bg-blue-600 \
            before:bg-blue-700',
    },
    size: {
        small: 'px-4 py-2',
        medium: 'px-8 py-6',
        big: 'px-8 py-6'
    },
    full: 'w-full h-full',
    base: '\
        select-none \
        before:shadow-lg \
        text-gray-100 \
        font-semibold \
        shadow-lg \
        uppercase \
        text-3xl \
        relative \
        transition-all \
        active:hover:top-1 \
        active:hover:before:top-0 \
        before:-z-10 before:absolute before:content-[\' \'] before:top-1 before:left-0 before:h-full before:w-full'
    
}

const Button = props => {
    const {
        size,
        className,
        rounded,
        full,
        pill,
        color,
        children,
        disabled,
        onClick
    } = props

    return <button onClick={onClick} disabled={disabled} className={clsx(
        buttonStyles.base,
        {
            [buttonStyles.pill]: pill,
            [buttonStyles.full]: full,
            [buttonStyles.rounded]: rounded
        },
        buttonStyles.colors[color],
        buttonStyles.size[size],
        className
    )}>
        {children}
    </button>

}

export default Button
