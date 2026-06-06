import './Button.scss'

interface Props {
    text: string
    buttonType: 'primary' | 'secondary'
}

export default function Button({text, buttonType}: Props) {
    return (
        <button className={buttonType}>{text}</button>
    )
}
