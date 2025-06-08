import { FunctionComponent } from "preact";

type User={
    name:string;
    email:string;
}
type UserProps={
    users:User[];
}
const UserComponent: FunctionComponent<UserProps>=(props)=>{
      const users= props.users;
      return(
        <div class="felx-table">
            <div class="flex-row header">
                <div class="flex-cell">Nombre</div>
                <div class="flex-cell">Email</div>
            </div>
                    {users && users.map((u,i)=>(
                        <div class="flex-row" key={i}>
                        <div class="flex-cell">{u.name}</div>
                        <div class="flex-cell">{u.email}</div>
                    </div>
                ))}
        
        </div>
      )
}
export default UserComponent;