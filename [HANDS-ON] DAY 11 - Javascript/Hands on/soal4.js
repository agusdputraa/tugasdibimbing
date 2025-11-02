/**
 * Returning Data from Promise Fetch API
 * - Fetch data from a public API using the Fetch API
 * - Use async/await to handle the asynchronous operation
 * - Return the data in JSON format
 * 
 * NOTE:
 * 1. Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos))
 * 2. Create the fetch function to get the posts data with Async/Await and tryCatch 
 *    to handle errors from the fetch operation
 * 3. Since we have specific users number on the fetch URL, make sure the function has 
 *   a parameter to accept the user number
 */

const fetchTodosWithAsyncAwait = async() => {
  try {
    const responseData = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    // Validate if not ok
    if(!responseData.ok) {
      throw new Error("Failed to fetch todos data");
    }

    const data = await responseData.json();

    if(!!data) {
      return {
        message: "Todos fetched successfully",
        data: data,
        status: "SUCCESS"
      };
    } else {
      return {
        message: "Todos not found",
        data: null,
        status: "ERROR"
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

const fetchTodoItemWithAsyncAwait = async(todoId) => {
  try {
    const responseData = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

    // Validate if not ok
    if(!responseData.ok) {
      throw new Error("Failed to fetch todos data");
    }

    const data = await responseData.json();

    if(!!data) {
      return {
        message: "Todos fetched successfully",
        data: data,
        status: "SUCCESS"
      };
    } else {
      return {
        message: "Todos not found",
        data: null,
        status: "ERROR"
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

//* WITH THEN AND CATCH
// fetchTodosWithAsyncAwait()
//   .then(result => {
//     console.log("Full Result: ", result);
//   })
//   .catch(error => {
//     console.error("Error: ", error);
//   })

//* WITHOUT THEN AND CATCH
// const getTodosData = async() => {
//   const result = await fetchTodosWithAsyncAwait();
//   console.log("Data: ", result);
//   //* In React.js, we can set the value or data to useState / useContext / zustand / redux
//   // setState(data);
// }

// getTodosData();

const getTodoData = async(todoId) => {
  const result = await fetchTodoItemWithAsyncAwait(todoId);
  console.log("Data: ", result);
}

getTodoData(67);