import { useState } from "react";

function useLocalStorage(itenName, initialValue) {
    const localStorageItem = localStorage.getItem(itenName);
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itenName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = useState(parsedItem);
  
    // Guarda los datos en localStorage
    const saveItem = (newItem) => {
      localStorage.setItem(itenName, JSON.stringify(newItem));
      setItem(newItem);
    };
    return[
      item, 
      saveItem 
    ];
  }
  export { useLocalStorage };