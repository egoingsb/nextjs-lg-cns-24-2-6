"use client"

import { useRouter } from "next/navigation";

export default function Create(){
  const router = useRouter();
  // @ts-ignore
  async function submit(evt){
    evt.preventDefault();
    const form = evt.target;
    const title = form.title.value;
    const body = form.body.value;
    const resp = await fetch('http://localhost:9999/page', 
    {
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({title, body})
    });
    const result = await resp.json();
    router.push('/read/'+result.id);
  }
  return (
  <div>
    <h2>Create</h2>
    <form onSubmit={submit}>
      <p><input type="text" placeholder="title" name="title" /></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create" /></p>
    </form>
  </div>)
}