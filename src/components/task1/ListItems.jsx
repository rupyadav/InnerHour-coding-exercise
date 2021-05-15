import React from 'react'

const ListItems = ({listValues, item}) => {
    return (
        <>
            {listValues.length !== 0 && (
                <div className="margin-top">
                  List {item} : {listValues.join(", ")}
                </div>
              )}
        </>
    )
}
export default ListItems;