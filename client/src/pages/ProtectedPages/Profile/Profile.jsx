import useAuth from "../../../hooks/useAuth"
import Meta from "../../../components/Meta/Meta";

const Profile = () => {
    const { user, handleLogout } = useAuth();
    if (!user) return null;

    return (
        <div className="pt-5">
            <Meta title="Profile | Alumni NITP" />
            <div className="lg:max-w-3xl md:max-w-2xl px-5 flex flex-col gap-3 m-auto">
                <h2 className="text-3xl font-bold text-sky-500 py-5">
                    Profile
                </h2>
                <div className="flex justify-between lg:flex-row md:flex-row flex-col gap-4 items-start">
                    <div>
                        <img className="h-20 w-20 rounded-full" src={`https://cloud.appwrite.io/v1/avatars/initials?name=${user.name.split(" ").join("+")}&width=80&height=80`} alt={user.name} />
                    </div>
                    <button onClick={handleLogout} className="bg-rose-500 hover:bg-rose-600 hover:scale-105 transition-all focus:bg-pink-500 text-white py-2 px-6 rounded-full">
                        LogOut
                    </button>
                </div>

                <div className="my-5 flex flex-col gap-2">
                    <p className="flex gap-2 text-lg font-medium">
                        <span className="text-gray-400"> Name: </span> <span> {user.name} </span>
                    </p>
                    <p className="flex gap-2 text-lg font-medium">
                        <span className="text-gray-400"> Email: </span> <span> {user.email} </span>
                    </p>
                    <p className="flex gap-2 text-lg font-medium">
                        <span className="text-gray-400"> Email Verified: </span> <span> {user.emailVerification ? "True" : "False"} </span>
                    </p>
                    <p className="flex gap-2 text-lg font-medium">
                        <span className="text-gray-400"> Role: </span> <span> {user.prefs.type} </span>
                    </p>
                    <p className="flex gap-2 text-lg font-medium">
                        <span className="text-gray-400"> Joined: </span> <span> {new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' }).format(new Date(user.$createdAt))} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile