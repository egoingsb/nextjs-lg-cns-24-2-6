// @ts-ignore
export default async function Read(props){
  const resp = await fetch('http://localhost:9999/page/'+props.params.id, {next:{revalidate:0}});
  const result = await resp.json();
  return <div>
    <h2>{result.title}</h2>
    {result.body}
  </div>
}