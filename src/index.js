

// fetch("http://20.244.56.144/evaluation-service/register",
//     {
//         method: "POST",
//         body: JSON
//         .stringify
//         ({
//           "email": "devansh.sharma_cs.aiml22@gla.ac.in",
// "name": "Devansh Sharma" ,
// "mobileNo": "6398853290",
// "githubUsername": "coderdevanshpro",
// "rollno": "2215500058",
// "collegeName": "GLA University",
// "accessCode": "CNneGT"
//         }),
//         headers: {
//           "Content-type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));













//         fetch("http://20.244.56.144/evaluation-service/auth",
//             {
//                 method: "POST",
//                 body: JSON
//                 .stringify
//                 ({
//                     email: 'devansh.sharma_cs.aiml22@gla.ac.in',
//                     name: 'devansh sharma',
//                     rollNo: '2215500058',
//                     accessCode: 'CNneGT',
//                     clientID: '547c9741-ab97-4ba6-821e-7c893d0e86cc',
//                     clientSecret: 'eurEsDYVvGsEEmgC'
//                   }),
//                 headers: {
//                   "Content-type": "application/json",
//                 },
//               })
//                 .then((response) => response.json())
//                 .then((json) => console.log(json));

fetch("http://20.244.56.144/evaluation-service/users")
  

.then(response => response.json())
.then(json => {

  
        console.log(json);
    
});