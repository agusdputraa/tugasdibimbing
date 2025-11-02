/**
 * Returning Data from Promise Fetch API
 * - Fetch data from a public API using the Fetch API
 * - Use async/await to handle the asynchronous operation
 * - Return the data in JSON format
 * 
 * NOTE:
 * 1. Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts)
 * 2. Create the fetch function to get the posts data with Promise (with then/catch)
 */
const fetchPostsWithPromise = async(idPost) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts${!!idPost ? `/${idPost}` : ''}`)
      .then(response => response.json())
      .then(data => {
        resolve({
          message: "Posts fetched successfully",
          data: data,
          status: "SUCCESS"
        });
      })
      .catch(error => {
        reject({
          message: "Error fetching posts, error: " + error.message,
          data: null,
          status: 'ERROR'
        })
      })
  })
}

fetchPostsWithPromise(100)
  .then(result => {
    const dataResult = result.data;
    console.log(dataResult);
  })
  .catch(error => {
    console.error(error);
  })

  // const fetchPostsWithAsyncAwait = ASYNC(idPost) => {
  //   try {
  //     const postsData = await fetchPostsWithPromoise(idPost)
  //     if(postsData.status === 'SUCCESS') {
  //       return postsData.data
  //     } else {
  //       throw new Error(postsData.message)
  //     }
  //   } catch (error) {
  //     throw new Error (error.message)
  //   } 
  // } 

  // fetchPostsWithAsyncAwait(100)