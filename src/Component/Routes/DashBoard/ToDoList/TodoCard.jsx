import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";


const TodoCard = ({ item }) => {
    
    const { title, type, deadline, description } = item;
    const axiosData = useAxios();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosData.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }

    return (
        <div >
            <div
                className="block rounded-lg bg-pink-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title}
                </h5>
                <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                    Priority: {type}
                </p>
                <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                    Deadline: {deadline}
                </p>
                <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                    {description}
                </p>

                <button onClick={() => handleDelete(item._id)} className="btn btn-sm">
                    Delete
                </button>
            </div>

        </div>
    );
};

export default TodoCard;