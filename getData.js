import axios from "axios";

async function getData(id) {

     try {
          const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
               .then((user) => {
               console.log(user.data)
          const post =axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
               .then(post=>console.log("posts:", post.data))
               
               }
               );


     } catch (err) {
          console.log("Lütfen bir sayı giriniz");
     }
}


export default getData;






