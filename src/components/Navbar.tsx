import './Navbar.scss'
import type React from 'react'

interface Props {
    items: React.ReactNode[]
}

export default function Navbar({items}: Props) {
    return (
        <nav>
            {items.map((item, i) => (<div key={i}>{item}</div>))}
        </nav>
    )
}