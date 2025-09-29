const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];

const filterUser=users.filter(user=>(user.age>30));
console.log(filterUser);

const mapUser=users.map(user=>user.name);
console.log("User Names",mapUser);

const firstAdmin=users.find(user=>user.role==="admin");
console.log("First Admin : ",firstAdmin);


