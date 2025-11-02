/**
 * Custom Async/Await Chaining to get banking data from pin
 * - Create 2 async functions:
 *  1. Function to validate the pin inputted by the user (resolve boolean)
 *   - Create several pin options for validation (can accept 3 different pins with 3 different users)
 *  2. Get User Banking Data if the validation is successful (resolve user data)
 *    - If the validation fails, reject with an error message
 * 3. Main Function will accept pin inputted by the user
 * 
 * NOTE:
 * - Function validate the pin will take around 1 second to resolve
 * - Function getUserBankingData will take around 2 seconds to resolve
 * - Use setTimeout to simulate the delay
 */

import { UserBankingData } from "./data/usersBanking.js";

const validatePin = async(pin) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validPins = ["123456", "567890", "910114"];

      if(validPins.includes(pin)) {
        resolve({
          status: "SUCCESS",
          message: "Pin validated successfully",
          isValid: true
        });
      } else {
        reject({
          status: "ERROR",
          message: "Pin not valid",
          isValid: false
        });
      }
    }, 1000);
  })
}

const getUserBankingData = async(pin) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = UserBankingData.find(user => user.pin === pin);

      if(!!userData) {
        resolve({
          status: "SUCCESS",
          message: "User data fetched successfully",
          data: userData
        })
      } else {
        reject({
          status: "ERROR",
          message: "User data not found",
          data: null
        })
      }
    }, 2000);
  })
}


const main = async(pin) => {
  try {
    //* 1. Check apakah pin valid atau tidak
    const isPinValid = await validatePin(pin);
    console.log("isPinValid: ", isPinValid);
    //* 2. Jika valid, maka ambil data pengguna dari database
    if(!!isPinValid.isValid) {
      try {
        const userData = await getUserBankingData(pin);
        if(!!userData.data) {
          console.log("User Banking Data:", userData);
        } else {
          throw new Error(userData.message);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      throw new Error(isPinValid.message);
    }
    //* 3. Jika tidak valid, maka throw error
  } catch (error) {
    throw new Error(error.message);
  }
}

main("123456");
