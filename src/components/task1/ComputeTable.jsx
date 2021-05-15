import React from 'react'
import { Table } from "react-bootstrap";

const ComputeTable = ({computedList, showComputedTable}) => {
    return (
        <div className="margin-top">
        {showComputedTable && (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Items present only in A</th>
                <th>Items present only in B</th>
                <th>Items present in both A and B</th>
                <th>Items combining both A and B (unique)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {computedList.presentOnlyInListA.length !== 0
                    ? computedList.presentOnlyInListA.map((item) => (
                        <li>{item}</li>
                      ))
                    : ""}
                </td>
                <td>
                  {computedList.presentOnlyInListB.length !== 0
                    ? computedList.presentOnlyInListB.map((item) => (
                        <li>{item}</li>
                      ))
                    : ""}
                </td>
                <td>
                  {computedList.presentInBothList.length !== 0
                    ? computedList.presentInBothList.map((item) => (
                        <li>{item}</li>
                      ))
                    : ""}
                </td>
                <td>
                  {computedList.presentInBothCombinedUnique.length !== 0
                    ? computedList.presentInBothCombinedUnique.map((item) => (
                        <li>{item}</li>
                      ))
                    : ""}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    )
}
export default ComputeTable
