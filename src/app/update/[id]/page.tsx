'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type UpdateProps = {
  params: {
    id: string
  }
}
export default function Update(props:UpdateProps){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  useEffect(()=>{
    fetch('http://localhost:9999/page/'+props.params.id)
      .then(resp=>resp.json())
      .then(data=>{
        setTitle(data.title);
        setBody(data.body);
      })
  },[])
  // @ts-ignore
  async function submitHandler(evt){
    evt.preventDefault();
    const resp = await fetch('http://localhost:9999/page/'+props.params.id,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title, body})
    })
    const result = await resp.json();
    router.push('/read/'+result.id);
    router.refresh();
  }
  return <div>
    <h2>Update</h2>
    <form onSubmit={submitHandler}>
      <p>
        <input 
          type="text" 
          name="title" 
          placeholder="title" 
          value={title} 
          onChange={evt=>setTitle(evt.target.value)} 
        /></p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          onChange={evt=>setBody(evt.target.value)}
          value={body}></textarea>
      </p>
     <p><input type="submit" value="update" /></p>
    </form>
  </div>
}
