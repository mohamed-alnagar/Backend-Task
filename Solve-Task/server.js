// const http = require("http");
// const fs =require("fs");
// const fsp = require("fs").promises;
// const path =require("path");

// const port =3000;
// const filePath = __dirname + "/students.json";

// const server =http.createServer(async(req,res)=>{
//     try {
//         const data =await fsp.readFile(filePath,"utf-8");
//         const students=JSON.parse(data);
//         if(req.url==="/students"){
//             res.writeHead(200,{"Content-Type":"application/json"});
//             res.end(JSON.stringify(students,null,2));
//         }else if (req.url==="/stats"){
//             const total =students.reduce((sum,s)=>sum+s.grade,0);
//             const avg =total /students.length;
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ totalStudents: students.length, averageGrade: avg }));

//         }else if(req.url==="/courses"){
//             const courses =[...new set(students.map(s=>s.course))];
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(courses));
//         }else {
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("Not Found");
//         }
//     }catch(error){
//         console.error("Error",error.message);
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
        
//     }
// });
// server.listen(port,()=>{
//     console.log(` Server running at http://localhost:${port}`);
    
// })

const http = require("http");
const fsp = require("fs").promises;
const path = require("path");

const port = 3000;
const filePath = path.join(__dirname, "students.json");

const server = http.createServer(async (req, res) => {
  try {
    const data = await fsp.readFile(filePath, "utf-8");
    const students = JSON.parse(data);

    if (req.url === "/students") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(students, null, 2));

    } else if (req.url === "/stats") {
      // Calculate average across all subjects
      const total = students.reduce((sum, s) => {
        if (s.grades) {
          const subjectGrades = Object.values(s.grades);
          const avg = subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length;
          return sum + avg;
        }
        return sum;
      }, 0);

      const avg = total / students.length;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ totalStudents: students.length, averageGrade: avg }));

    } else if (req.url === "/courses") {
      const courses = [...new Set(students.map(s => s.course))];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(courses));

    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  } catch (error) {
    console.error("Error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});