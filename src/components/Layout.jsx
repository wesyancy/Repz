import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

export default function Layout() {
    return (
        <div style={{ display: "flex" }}>
            <MenuBar />
            <main style={{ marginLeft:'240px', padding: "1rem", flex: 1 }}>
                <Outlet />
            </main>
        </div>
    );
}
