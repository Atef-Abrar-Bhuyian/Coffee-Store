import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, quantity, supplier, taste, details, photo, category } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method:'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remaining = coffees.filter(cof => cof._id !==  _id);
                setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="hero bg-base-200 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">{name}!</h1>
          <div>
            <p className="py-2">{details}</p>
            <p className="py-2">Supplier: {supplier}</p>
            <p className="py-2">Taste: {taste}</p>
            <p className="py-2">Quantity: {quantity}</p>
            <p className="py-2">Category: {category}</p>
          </div>
        </div>
        <div className="join join-vertical">
          <button className="btn join-item bg-yellow-950 text-white">
            View
          </button>
          <Link to={`/update-coffee/${_id}`}>
          <button className="btn join-item bg-yellow-950 text-white">Edit</button>
            
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-yellow-950 text-white"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
