import { useRef, useState, type ChangeEvent, type SubmitEvent } from 'react';
import './ChecklistItem.scss'
import { Trash2 } from 'lucide-react';

interface ChecklistItemProps {
    id: number
    onDelete: (id: number) => void
    onSave: (id: number, name: string) => void
}

export default function ChecklistItem({id, onDelete, onSave}: ChecklistItemProps) {
    const [task, setTask] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)
    const [complete, setComplete] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const saveTask = () => {
        if (task.trim() === '') {
            setErrorVisible(true)
            return
        }

        onSave(id, task)
    }

    const handleInput = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        inputRef.current?.blur()
    }

    const handleFocus = () => {
        setErrorVisible(false)
    }

    const handleComplete = (e: ChangeEvent<HTMLInputElement>) => {
        setComplete(e.target.checked)

        if (e.target.checked === true)
        {
            setTimeout(() => {
                onDelete(id)
            }, 1000)
        }
    }

    return (
        <div className='item-box'>
            <form onSubmit={handleInput}>
                <div className='item-form-box'>
                    <input 
                    type='checkbox' 
                    checked={complete}
                    onChange={handleComplete} />

                    <input 
                    type='text' 
                    className='item-input'
                    placeholder='Enter name...' 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    ref={inputRef}
                    autoFocus
                    onBlur={saveTask}
                    onFocus={handleFocus} />
                    <button type='button' onClick={() => onDelete(id)} className='item-delete'>
                        <Trash2 width={'1rem'} height={'1rem'}/>
                    </button>
                </div>
                <div>
                    {errorVisible && <label className='error-label'>No text entered!</label>}
                </div>
            </form>
        </div>
    )
}
