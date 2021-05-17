import React, { useState } from "react";

// components import
import TextBox from "./TextBox";
import ComputeTable from "./ComputeTable";
import ListItems from "./ListItems";
import Card from "./Card";
import Button from "./Button";

// Utils
import { inputValidation } from "./Task1Util";

// Task1 Component
const ListDiff = () => {
  /**state used to set the listItems */
  const [listAValues, setlistAValues] = useState([]);
  const [listBValues, setlistBValues] = useState([]);
  /** state used to set the input value for textbox*/
  const [listAElem, setListAElem] = useState("");
  const [listBElem, setListBElem] = useState("");
  /** state used to show and hide computed table */
  const [showComputedTable, setShowComputedTable] = useState(false);
  /** state used to set the validation msg*/
  const [duplicateEntryValidation, setDuplicatEntryValidation] = useState({
    msgA: "",
    msgB: "",
  });
  /** state used set the computed items*/
  const [computedList, setComputedList] = useState({
    presentOnlyInListA: [],
    presentOnlyInListB: [],
    presentInBothList: [],
    presentInBothCombinedUnique: [],
  });

  /** function is called onClick of Add button */
  const addElementsToList = (listValue, listName) => {
    if (
      !inputValidation(
        listValue,
        listName,
        listAValues,
        listBValues,
        setDuplicatEntryValidation
      )
    )
      return;

    setShowComputedTable(false);

    const listA = [...listAValues];
    const listB = [...listBValues];

    if (listName === "listA") {
      listA.push(listValue);
      setlistAValues(listA);
      setListAElem("");
    } else {
      listB.push(listValue);
      setlistBValues(listB);
      setListBElem("");
    }
  };

  /** function is called onClick of compute button */
  const handleCompute = () => {
    setShowComputedTable(true);
    let list1 = [...listAValues];
    let list2 = [...listBValues];
    let uniqueInA = list1.filter((item) => list2.indexOf(item) === -1);
    let uniqueInB = list2.filter((item) => list1.indexOf(item) === -1);
    setComputedList({
      presentOnlyInListA: list1.filter((item) => !list2.includes(item)),
      presentOnlyInListB: list2.filter((item) => !list1.includes(item)),
      presentInBothList: list1.filter((item) => list2.includes(item)),
      presentInBothCombinedUnique : [...new Set([...list1, ...list2])],
    });
  };

  /** function called onClick of Reset button */
  const handleReset = () => {
      setShowComputedTable(false);
      setlistAValues([]);
      setlistBValues([]);
      setDuplicatEntryValidation({
        msgA: "",
        msgB: "",
      });
      setListAElem('')
      setListBElem('')
  }

  return (
    <>
      <h1 className="text-center margin-top">Task 1 - Difference between 2 Lists</h1>
      <div className="row margin-top">
        <Card>
          <TextBox
            label="Enter elements in List A"
            value={listAElem}
            onChange={setListAElem}
            addElementsToList={addElementsToList}
            listName="listA"
            duplicateEntryValidation={duplicateEntryValidation.msgA}
          />
          <ListItems listValues={listAValues} item="A" />
        </Card>
        <div className="col-md-2"></div>
        <Card>
          <TextBox
            label="Enter elements in List B"
            value={listBElem}
            onChange={setListBElem}
            addElementsToList={addElementsToList}
            listName="listB"
            duplicateEntryValidation={duplicateEntryValidation.msgB}
          />
          <ListItems listValues={listBValues} item="B" />
        </Card>
      </div>
      <div className="text-center margin-top">
        <Button label="Compute" onClick={handleCompute} />&nbsp;&nbsp;
        <Button label="Reset" onClick={handleReset} />
      </div>
      <ComputeTable
        showComputedTable={showComputedTable}
        computedList={computedList}
      />
    </>
  );
};
export default ListDiff;
