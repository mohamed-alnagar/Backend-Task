  const fs =require("fs");
  const fsp = require("fs").promises;
  
  const filePath = __dirname + "/students.json";


  function readStudents(){
    const data = fs.readFileSync(filePath,"utf-8");
    console.log(`Read Cmpleted Sync`);
    
    return JSON.parse(data);
  }

  function writeStudents(data){
    fs.writeFileSync(filePath,JSON.stringify(data,null,2));
    console.log(`Written Completed Sync`);

  }


  function addStudentSync(student){
    const students = readStudents();
    students.push(student);
    writeStudents(students);
    console.log(`Sync Student Added`);
    

  }

  function updateStudentCourse(id,newCourse){
    const students = readStudents();
    const student = students.find(s=>s.id===id);
    if(student){
      student.course=newCourse;
      writeStudents(students);
      console.log(`Course updated`);
      
    }else {
      console.log(`Student ${id} not found`);
      
    }

  }


  function deleteStudent(id){
    const students = readStudents().filter(s=>s.id!==id);
    writeStudents(students);
    console.log(`Student ${id} deleted`);
    
  }
  /*---------------------------------------------------------------- */

  async function readStudentsAsync(){
    const data = await fsp.readFile(filePath,"utf-8");
    return JSON.parse (data);

  }

  async function writeStudentsAsync(data){
    await fsp.writeFile(filePath,JSON.stringify(data,null,2));
    console.log(`Written Completed Asyc`);
  }


  async function addStudentAsync(student){
    const students = await readStudentsAsync();
    students.push(student);
    await writeStudentsAsync(students);
    console.log(`Async Student Added`);
  }

  async function updateStudentCourseAsync(id,newCourse){
    const students=await readStudentsAsync();
    const student = students.find(s=>s.id===id);
    if(student){
      student.course=newCourse;
      await writeStudentsAsync(students);
      console.log(`Async: Student ${id} course updated`);
      
    }else {
      console.log(`Async: Student ${id} not found`);
      
    }
  }

  async function deleteStudentAsync(id){
    const students= await readStudentsAsync();
    const newStudents=students.filter(s=>s.id!==id);
    await writeStudentsAsync(newStudents);
    console.log(`Async: Student ${id} deleted`);
  }


  function runSync(){
    console.log("Sync Run Function");
    console.log("Before Operations",readStudents());
    addStudentSync({id: 4, name: "Mona", course: "English"});
    updateStudentCourse(2,"Biology");
    deleteStudent(1);
    console.log("After Operations:", readStudents()); 
  }


  async function runAsync() {
    console.log("Async Run Function");
    console.log("Before Operations",await readStudentsAsync());
    await addStudentAsync({id: 5, name: "Hassan", course: "Physics"});
    await updateStudentCourseAsync(3,"Geography");
    await deleteStudentAsync(2);
    console.log("After Operations:", await readStudentsAsync()); 
  }


  (async()=>{ 
    runSync();
    await runAsync();
  })();
