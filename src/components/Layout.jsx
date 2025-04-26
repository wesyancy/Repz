import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarSlim from "./SidebarSlim";

export default function Layout() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <main style={{ marginLeft:'240px', padding: "1rem", flex: 1 }}>
                <Outlet />
            </main>
        </div>
    );
}
