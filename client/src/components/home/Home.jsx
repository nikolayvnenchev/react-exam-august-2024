import { Link } from "react-router-dom";


export default function Home() {
    return (
            <div className="mx-auto max-w-4xl py-32 sm:py-35">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                        WELCOME to the SPORT  store !
                    </h1>
                </div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <img
                        src="https://t3.ftcdn.net/jpg/02/55/78/60/360_F_255786001_nqunh2BB5NWxpKyHaGWaelZo5qW3smsV.jpg"
                        alt=""
                    />
                </div>
                <div className="text-center">
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        All kind of sports equipments and accessoires. You are the one who choose!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/products"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
    )
}
