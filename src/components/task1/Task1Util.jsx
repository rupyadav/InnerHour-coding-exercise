
/**
 * function to validate duplicate entries
 * @param listValue 
 * @param listName 
 * @param listAValues
 * @param listBValues
 * @param setDuplicatEntryValidation
 */
export const inputValidation = (listValue, listName, listAValues, listBValues, setDuplicatEntryValidation) => {
  if (listName === "listA" && listAValues.indexOf(listValue) > -1) {
    setDuplicatEntryValidation({
      msgA: `${listValue} is already present in List A`,
      msgB: "",
    });
    return false;
  } else if (listName === "listB" && listBValues.indexOf(listValue) > -1) {
    setDuplicatEntryValidation({
      msgA: "",
      msgB: `${listValue} is already present in List B`,
    });
    return false;
  } else {
    setDuplicatEntryValidation({
      msgA: "",
      msgB: "",
    });
    return true;
  }
};
