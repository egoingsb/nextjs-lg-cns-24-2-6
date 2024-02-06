type UpdateProps = {
  params: {
    id: string
  }
}
export default function Update(props:UpdateProps){
  return <div>
    <h2>Update {props.params.id}</h2>
  </div>
}

// function sum(left:number, right:number):number{
//   return left + right;
// }
// sum(1, 'two');