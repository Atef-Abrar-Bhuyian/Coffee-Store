import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier  = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const category = form.category.value;

        const newCoffee = {name, quantity, supplier, taste,details,photo,category}
        console.log(newCoffee);


        // Send Data To the Server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);

            Swal.fire({
                title: 'Success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        })



    }


  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold mb-4">ADD A COFFEE</h2>

      <div className="card w-full shadow-2xl">
        <form onSubmit={handleAddCoffee} className="card-body">
          {/* Name And Quantity */}
          <div className="flex gap-8 w-3/4 mx-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Supplier row */}
          <div className="flex gap-8 w-3/4 mx-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Category & details */}
          <div className="flex gap-8 w-3/4 mx-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* photo url */}
          <div className="flex gap-8 w-3/4 mx-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>




          <div className="form-control mt-6">
            <button className="btn btn-primary w-3/4 mx-auto">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
