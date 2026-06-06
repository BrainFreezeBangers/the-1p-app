import { useRef, useState } from "react";
import ChecklistItem from "./ChecklistItem";
import './Checklist.scss'
import { CirclePlus } from "lucide-react";


type Task = {
    id: number;
    name: string
}

export default function Checklist() {
    const [items, setItems] = useState<Task[]>([])
    const idRef = useRef(1)

    const addTask = () => {
        setItems([...items, {id: idRef.current, name: ''}])
        idRef.current++
    }

    const handleDelete = (id: number) => {
        setItems(items.filter(item => item.id !== id))
    }

    const handleSave = (id: number, name: string) => {
        setItems(prev => prev.map(item => item.id === id ? {...item, name: name} : item))
    }

    return (
        <div className="checklist">
            <button onClick={addTask} className="primary-button">
                Add Task 
                <CirclePlus width={'1rem'} height={'1rem'} /> 
            </button>

            <div className="item-list">
                {
                    items.length > 0 ? <h3 className="list-label">Tasks for Today...</h3> : <h3 className="list-label">No Tasks yet...</h3>
                }
                <div className="item-list-items">
                    {items.map(item => <ChecklistItem key={item.id} id={item.id} onDelete={handleDelete} onSave={handleSave} />)}
                </div>
            </div>
        </div>
    )
}
