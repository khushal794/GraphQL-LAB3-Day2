const { ApolloServer,gql}=require("apollo-server");


const employees=[
    {id:1,name:"Apoorva Khandelwal",department:"HR"},
    {id:2,name:"Khushal Sharma",department:"Engineering"},
];

const typeDefs=gql`
type Employee {
    id:ID
    name:String
    department:String 
}
type Query{
    employee(id:ID!):Employee
    employees:[Employee]
}
`;

const resolvers={
    Query:{
        employee:(parent,{id})=>
        employees.find((employee)=>employee.id===id),

        employees:()=>employees,

        
    },
};

const server=new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>{
    console.log(`Server Ready At {${url}}`);
})

