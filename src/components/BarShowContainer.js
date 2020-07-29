import React, { useState, useEffect }  from 'react'
import Bar from './Bar'

const BarShowContainer =(props) => {
  const [barRecord, setBarRecord] = useState({
    id: null,
    name: "",
    address: "",
    cover_charge: null,
    hours_of_operation: "",
    reviews: []
  })

  useEffect(() => {
    let barId = props.match.params.id;
    fetch(`/api/v1/bars/${barId}`)
    .then((response) => response.json())
    .then((barJson) => {
      setBarRecord(barJson)
    })
  }, [])

  return(
    <div className="bars-container">
      <h3> Bar Showssssssss Container </h3>
      <Bar
        key={barRecord.id}
        id={barRecord.id}
        name={barRecord.name}
        reviews={barRecord.reviews}
      />
    </div>
  )
}

export default BarShowContainer
