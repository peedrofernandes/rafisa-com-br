const baseUrl = process.env.BASE_URL

export const getData = async (route, token) => {
  const url = `${baseUrl}/api/${route}`;
  
  const req = {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  }

  const res = await fetch(url, req);
  const data = await res.json();

  return data;
}

// export const postData = async (route, post, token) => {
//   const url = `${baseUrl}/api/${route}`;

//   const req = {
//     method: 'POST',
//     headers: {
//       'Authorization': token
//     },
//     body: JSON.stringify(post)
//   }

//   const res = await fetch(url, req);
//   const data = await res.json();

//   return data;
// }

export const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  })

  const data = await res.json();
  return data;
}