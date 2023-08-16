

export const loadStateFromLocalStorage = (key) => {
  
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  };
  
  export const saveStateToLocalStorage = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.log(error);
    }
  };
  