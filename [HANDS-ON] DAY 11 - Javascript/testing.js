const testFunction = async() => {
  const response = await fetch("http://localhost:3050/learning-express");

  if(!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  console.log("Data: ", data);
}

testFunction();