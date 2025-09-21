import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import Alert from "../../components/Alert"

function Tours() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [tours, setTours] = useState(null)

  function handleDelete(id) {
    const updatedTours = tours.filter(tour => tour.id != id)
    setTours(updatedTours)
  }

  async function fetchTours() {
    try {
      setLoading(true)
      const response = await fetch("/api/tours")
      const data = await response.json()
      setTours(data)
    }
    catch (error) {
      console.log(error)
      setError(`Somthing went wrong ${error.message}`)
    }
    finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (<Loader />)
  }
  if (error) {
    return <Alert message={error.message} alterType="alert-danger" />
  }
  return (
    <div className="container">
      <h2 className="text-center my-4">Our Tours</h2>
      {tours?.length ? (
        <div className="row g-2 mb-4">
          {tours.map(tour => <div key={tour.id} className="col-xs-12 col-md-6 col-lg-3">
            <Card id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} handleDelete={handleDelete} />
          </div>)}
        </div>) : (<div className="d-flex flex-column align-items-center gap-2"><h3>No tours available</h3><button className="btn btn-sm btn-outline-primary" onClick={()=> fetchTours()}>Refresh</button></div>)
      }
    </div>
  )
}

function Card({ id, name, info, image, price, handleDelete }) {
  return (
    <div className="card shadow-sm" style={{height:"30rem"}}>
      <span className="bg-success text-center text-white" style={{ position: "absolute", right: "0px", width: "100px" }}>${price}</span>
      <img src={image} className="card-img-top" alt="tour-image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{info}</p>
        <button className="btn btn-primary" onClick={() => handleDelete(id)}>Not Intrested</button>
      </div>
    </div>
  )

}

export default Tours