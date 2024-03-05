import { useState } from 'react'
import styles from './home.module.css'
import { IData } from './interface'
import { data } from './constants'
function App():JSX.Element {
  const [title,setTitle] = useState<string>()
 
  const [arr,setArr] = useState<IData[]>(data)
  

  const handleSubmit = ():void => {
    if (!title?.length) return 
    const newTodo = {
        title,
        id:new Date().getTime(),
        description:'description'

    }
    console.log(newTodo);
    setArr(prev => [...prev,newTodo])
    

    setTitle('')

  }
  const deleteItem = (id:number):void => {
    const newArr = arr.filter(c => c.id !== id)
    setArr(newArr)
  };
  return (
    <div className={styles.todo}>
    <h1 className={styles.title}>APP TODO</h1>
    <input placeholder='Enter Todo...' value={title} onChange={e => setTitle(e.target.value)} className={styles.input}/>
    <button onClick={handleSubmit} className={styles.button}>Add todo</button>
  <div className={styles.card}>
    {arr.map(c => (
      <div className={styles.cardItem} key={c.id}>

      <p>{c.title}</p>
      <div className={styles.delBtn}>
        <button onClick={() =>deleteItem(c.id)}>Del</button>
      </div>
      </div>
    ))}
    </div>
    </div>
  )
} 

export default App
