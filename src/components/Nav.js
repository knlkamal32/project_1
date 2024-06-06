

function Nav() {
    function logout() {
        window.localStorage.clear();
        window.location.href = '/login'
    }

    return(
        <div className="bg-black w-full flex justify-end items-center px-4 h-12 sticky top-0">
            <div className="text-white text-sm font-semibold cursor-pointer" onClick={() => logout()}>Logout</div>
        </div>
    )
}

export default Nav;