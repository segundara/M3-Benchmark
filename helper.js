const url = "https://striveschool.herokuapp.com/api/movies/";
//const urlGet_2 = "https://striveschool.herokuapp.com/api/movies/";

const username = 'user24';
const password = '48D4vaVh6Ra3DD8w';

const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));


const getCategory = async () => {
    let category = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    console.log(category)
    return await category.json();
  };

  const getMovies = async (category) => {
    let result = []
    for (let index = 0; index < category.length; index++) {
      const element = category[index];
     
    let response = await fetch(url + element, {
      method: "GET",
      headers: headers,
    });
    const m = await response.json()
    console.log(m)
    //return await response.json();
    result.push(...m)
     
}
console.log(result)
return result
  };
  

  
const getMovie = async (id) => {
  let response = await fetch(url +'/id/'+ id,{
    method: "GET",
    headers: headers,
  });
  console.log(response)
  return await response.json();
};

const saveMovie = async (movieDetail) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(movieDetail),
    headers: headers,
  });
  console.log(response)
  return response;
};

const editMovie = async (id, movieDetail) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(movieDetail),
    headers: headers,
  });
  return response;
};

const deleteMovie = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
    headers: headers,
  });
  return response;
};
