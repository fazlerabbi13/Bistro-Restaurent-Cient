import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../hook/useAxiosSequre";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSequre = useAxiosSequre();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSequre.get('/users',)
            return res.data;
        }
    });

    const handleMakeAdmin = user =>{
        axiosSequre.patch(`/users/admin/${user._id}`)
        .then(res =>{
            if(res.data.modifiedCount === 1){
                refetch();
                Swal.fire({
                    position:'top-end',
                    icon:"success",
                    title: `${user.name} is admin right now`,
                    showConfirmButton:false,
                    timer:1500
                });

            }
        })
    }

    const handleDelete = user => {
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

                axiosSequre.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
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
        <div>
            <div className="flex justify-evenly items-center">
                <h1 className="text-3xl">All Users:</h1>
                <h1 className="text-3xl">Total Users:{users.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-white btn-ghost text-xl bg-orange-500">
                                        <FaUsers></FaUsers></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn text-xl text-red-500">
                                        <FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;