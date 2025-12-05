const sform=document.getElementById('studentForm');
const slist=document.getElementById('studentList');
const ediv=document.getElementById('error');
const studentArray=[];

sform.addEventListener('submit',function(event){
    event.preventDefault();
    const sid=document.getElementById('studentId').value;
    const sname=document.getElementById('studentName').value;
    const sage=document.getElementById('studentAge').value;

try{
   addstudent(sid,sname,sage);
   displayStudents();
   ediv.textContent='';
}catch(error){
    ediv.textContent=error.message;
}
sform.reset();
});

function addstudent(sid,sname,sage){
    if(!sage||!sname||!sid){
        throw new Error('all fields are req')
    }
    if(isNaN(sage)||sage<=0){
        throw new Error('positive numbers are req')
    }
    const studentExists=studentArray.some(studentObject=>studentObject.sid==sid);
    if(studentExists){
        throw new Error('id exists')
    }
    const studentObject={sid,sname,sage:parseInt(sage,10)};
    studentArray.push(studentObject);
}

function displayStudents(){
    slist.innerHTML='';
    studentArray.forEach(studentObject=>{
        const li=document.createElement('li');
        li.textContent=`ID:${studentObject.sid},Name:${studentObject.sname},Age:${studentObject.sage}`;
        slist.appendChild(li);
    });
}
