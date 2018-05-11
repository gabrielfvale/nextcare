import { AsyncStorage } from "react-native";

export const USER_KEY = "has-done-result";

export const addResult = () => AsyncStorage.setItem(USER_KEY, "true");

export const removeResult = () => AsyncStorage.removeItem(USER_KEY);

export const doneResult = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_KEY)
        .then(res => {
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
};