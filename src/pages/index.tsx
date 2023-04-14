import axios from "axios";

const Home=()=> {
  return (
  <h1 className="text-3xl underline text-green-800">
    Hello World
  </h1>
  )
}
export const getServerSideProps =async ()=>{
  const response = await axios.get(`http://localhost:3000/api/post`);
  console.log(response.data.name);
  return{
    props:{}
  }
}
export default Home;
