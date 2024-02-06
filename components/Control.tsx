"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Control(){
  const params = useParams();
  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      
      {params.id === undefined ? null : <>
        <li><Link href="/update/id">update</Link></li>
        <li><button>delete</button></li>
      </>}
      
      
    </ul>
  )
}