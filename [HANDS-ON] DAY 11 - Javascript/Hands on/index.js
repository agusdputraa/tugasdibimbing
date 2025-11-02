// // const memasakAir = (isSuccess=true) => {
// //     return new Promise((resolve, reject) => {
// //         console.log("Start memasak air");
// //         setTimeout(() => {
// //             if(isSuccess) {
// //                 resolve({
// //                     status: "SUCCESS",
// //                     message: "Air sudah matang, success!",
// //                 });
// //             } else {
// //                 reject({
// //                     status: "ERROR",
// //                     message: "Air tidak matang, error!",
// //                 });
// //             }
// //         }, 1500);
// //     })
// // }

// // memasakAir(true)
// //     .then((result) => {
// //         console.log(result);
// //     })
// //     .catch((resultError) => {
// //         console.error(resultError);
// //     })


// const promise1Function = (isSuccess=true) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isSuccess) {
//                 resolve({
//                     status: "SUCCESS",
//                     message: "Promise 1 function success!",
//                 });
//             } else {
//                 reject({
//                     status: "ERROR",
//                     message: "Promise 1 function error!",
//                 })
//             }
//         }, 1000);
//     })
// };

// const promise2Function = (isSuccess=true) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isSuccess) {
//                 resolve({
//                     status: "SUCCESS",
//                     message: "Promise 2 function success!",
//                 });
//             } else {
//                 reject({
//                     status: "ERROR",
//                     message: "Promise 2 function error!",
//                 })
//             }
//         }, 1000);
//     })
// };

// promise1Function(false)
//     // Then promise 1 function
//     .then((result) => {
//         if(result.status === 'SUCCESS') {
//             console.log("Promise 1 function success executed!");
//             return promise2Function(true);
//         } else {
//             console.error("Promise 1 function error executed!");
//             return promise2Function(false);
//         }
//     })
//     // Then promise 2 function
//     .then((result) => {
//         if(result.status === 'SUCCESS') {
//             console.log("Promise 2 function success executed!");
//         } else {
//             console.error("Promise 2 function error executed!");
//         }
//     })
//     // Catch promise 1 function
//     .catch((resultError) => {
//         console.error("Promise 1 function error executed!", resultError);
//     })
//     // Catch promise 2 function
//     .catch((resultError) => {
//         console.error("Promise 2 function error executed!", resultError);
//     })



const fetchUsersData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check error response
    if(!response.ok) {
        throw new Error("Failed to fetch users data");
    }

    const data = await response.json();
    return data;
}

// fetchUsersData()
//     .then((data) => {
//         console.log("data users: ", data);
//     })
//     .catch((error) => {
//         console.error("Error fetching users data: ", error);
//     });

const getDataUsers = async() => {
    const data = await fetchUsersData();
    console.log("data users new: ", data);
}

getDataUsers();