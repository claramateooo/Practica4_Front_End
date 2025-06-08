import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import UserComponent from "../components/UserComponent.tsx";

type User={
    name:string;
    email:string;
}
export const handler:Handlers<User[]>={
  GET: async (_req:Request, ctx:FreshContext)=>{
     const response= await fetch("https://jsonplaceholder.typicode.com/users");
     const data= await response.json();
     return ctx.render(data);
  }
}
const Home= (props:PageProps<User[]>)=>{
   const users= props.data;
   return(
    <>
    <div>
    <UserComponent users={users}/>
    </div>
    </>
   )
}
export default Home;