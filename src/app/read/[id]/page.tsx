// @ts-ignore
export default async function Read(props){
  const resp = await fetch('http://localhost:9999/page/'+props.params.id);
  const result = await resp.json();
  console.log('result', result);
  return <div>
    <h2>{result.title}</h2>
    {result.body}
  </div>
}