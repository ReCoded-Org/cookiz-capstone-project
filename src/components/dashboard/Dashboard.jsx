function Dashboard() {
    return (
        <div className='dashboard flex h-screen w-auto'>
            <div className='sidebar w-[20%] border-2'>
                <div className='dash-title'>
                    <div className='logo'>
                        <h1>
                            <span>COOK</span>IEZ
                        </h1>
                    </div>
                    <div className='sub-title'>
                        <h3>Dashboard</h3>
                    </div>
                </div>
                <div className='dash-user'>
                    <div className='user-img'>IMG</div>
                    <div className='user-id'>Jannifer Lawrence</div>
                </div>
            </div>
            <div className='dash-content w-[80%] border-2 border-orange-300'>
                <p>asdasd</p>
            </div>
        </div>
    );
}

export default Dashboard;
