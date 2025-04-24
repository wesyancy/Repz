import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main style={{ padding: '1rem', flex: 1 }}>
                <Outlet />
            </main>
        </div>
    );
}
