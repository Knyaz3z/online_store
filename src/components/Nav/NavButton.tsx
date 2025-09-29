'use client'

interface buttonProps {
    children: React.ReactNode,
    className: string,
}

export default function NavButton({children, className}: buttonProps) {
    return (
        <button className={`${className}`}>{children}</button>

    )
}