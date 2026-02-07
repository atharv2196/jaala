import useAuthStore from '../../store/authStore'

export default function Profile() {
    const user = useAuthStore(state => state.user)
    const logout = useAuthStore(state => state.logout)

    return (
        <section className="page-section">
            <div className="container">
                <h1 className="section-title">My Profile</h1>
                <div className="profile-card">
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <p>Member since: {user?.memberSince}</p>
                    <p>Tier: {user?.tier}</p>
                    <button onClick={logout} className="btn btn-ghost">Logout</button>
                </div>
            </div>
        </section>
    )
}
