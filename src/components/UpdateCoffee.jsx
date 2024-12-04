import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, details, photo, category } =
    coffee;
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-2xl font-bold mb-4">Update Coffee: {name}</h2>

      <div className="card w-full shadow-2xl">
        <form className="card-body">
          {/* Name And Quantity */}
          <div className="flex gap-8 w-3/4 mx-auto">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-3/4 mx-auto">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
