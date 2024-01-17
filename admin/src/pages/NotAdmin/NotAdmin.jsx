import useAuth from "../../hooks/useAuth";

const NotAdmin = () => {
    const { handleLogout } = useAuth();
    return (
        <div className='pt-24'>
            <div className="text-center flex flex-col gap-1">
                <h1 className="text-3xl text-center font-bold text-red-500 pt-24">You are not an admin</h1>
                <p>
                    Please contact the admin to get access to the admin portal.
                </p>
                <p>
                    If you are an admin, please login with your admin account.
                </p>
                <p>
                    If you mistakly logged in. <button onClick={handleLogout} className="text-sky-500 font-medium">
                        Log Out
                    </button>
                </p>
            </div>

        </div>
    )
}

export default NotAdmin;