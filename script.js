import myJson from './data.json' assert {type: 'json'};
//console.log(myJson);

const tbody = document.getElementById("tbody");

for (let i = 0; i < myJson.length; i++) {
    let student=myJson[i];

    addStudent(student);
}

  function addStudent(student){
    const tr = document.createElement("tr");
      tr.innerHTML=`<td>${student.id}</td>
                  <td>${student.first_name+ " "+ student.last_name}</td>
                  <td>${student.gender}</td>
                  <td>${student.class}</td>
                  <td>${student.marks}</td>
                  <td>${student.passing==true?"passing":"failed"}</td>
                  <td>${student.email}</td>`
          //console.log(tr);
          tbody.appendChild(tr);
  }



  
const elementToSort=document.getElementById("a-z");
elementToSort.addEventListener("click",sortName);


function clearList(){
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

function sortName(){
clearList();
     myJson.sort((a, b) => (a.first_name> b.first_name) ? 1 : (a.first_name < b.first_name) ? -1 : 0);
    //console.log(myJson);
    for (let i = 0; i < myJson.length; i++) {
        let student=myJson[i];
    
        addStudent(student);
    }
  };


      const elementToSortReversed=document.getElementById("z-a");
elementToSortReversed.addEventListener("click", sortNameReverse);

      function sortNameReverse(){
        clearList();
             myJson.sort((a, b) => (a.first_name < b.first_name) ? 1 : (a.first_name > b.first_name) ? -1 : 0);
            //console.log(myJson);
            for (let i = 0; i < myJson.length; i++) {
                let student=myJson[i];
            
                addStudent(student);
            }
          };



          const elementToSortMarks=document.getElementById("marks");
          elementToSortMarks.addEventListener("click", sortMarks);
          
                function sortMarks(){
                  clearList();
                       myJson.sort((a, b) => (a.marks > b.marks) ? 1 : (a.marks < b.marks) ? -1 : 0);
                     // console.log(myJson);
                      for (let i = 0; i < myJson.length; i++) {
                          let student=myJson[i];
                      
                          addStudent(student);
                      }
                    };
  
                    
          const elementToSortClass=document.getElementById("class");
          elementToSortClass.addEventListener("click", sortClass);
          
                function sortClass(){
                  clearList();
                       myJson.sort((a, b) => (a.class > b.class) ? 1 : (a.class < b.class) ? -1 : 0);
                      //console.log(myJson);
                      for (let i = 0; i < myJson.length; i++) {
                          let student=myJson[i];
                      
                          addStudent(student);
                      }
                    };
  

                    const elementToSortPassing=document.getElementById("passing");
                    elementToSortPassing.addEventListener("click", sortPassing);
                    
                          function sortPassing(){
                            clearList();
                                 myJson.sort((a, b) => (a.passing < b.passing) ? 1 : (a.passing > b.passing) ? -1 : 0);
                                //console.log(myJson);
                                for (let i = 0; i < myJson.length; i++) {
                                    let student=myJson[i];
                                
                                    addStudent(student);
                                }
                              };

                              const elementToSortGender=document.getElementById("gender");
                              elementToSortGender.addEventListener("click", sortGender);
                              
                                    function sortGender(){
                                      clearList();
                                           myJson.sort((a, b) => (a.gender < b.gender) ? 1 : (a.gender > b.gender) ? -1 : 0);
                                          //console.log(myJson);
                                          for (let i = 0; i < myJson.length; i++) {
                                              let student=myJson[i];
                                          
                                              addStudent(student);
                                          }
                                        };