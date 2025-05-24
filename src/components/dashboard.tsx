import DashboardTopCard from "./dashboardTopCard";

export default function Dashboard() {
    return (
        <div className="col-span-9">
            <h1 className="font-bold my-2">Dashboard</h1>
            <div className="w-full grid grid-cols-3 gap-4 ">
                <DashboardTopCard />
                <DashboardTopCard />
                <DashboardTopCard />

            </div>

        </div>
    )
}