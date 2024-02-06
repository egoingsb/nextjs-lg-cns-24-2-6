"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Button from '@mui/material/Button';


export default function Control(){
  const params = useParams();
  const router = useRouter();
  async function deleteHandler(){
    await fetch('http://localhost:9999/page/'+params.id,{
      method:'DELETE'
    });
    router.push('/');
    router.refresh();
  }
  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      
      {params.id === undefined ? null : <>
        <li><Link href={`/update/${params.id}`}>update</Link></li>
        <li><Button variant="contained" onClick={deleteHandler}>delete</Button></li>
      </>}
      
      
    </ul>
  )
}