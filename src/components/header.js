import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <>
            <div data-todo-x-show="sidebarOpen" className="md:hidden" data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state.">
                <div className="fixed inset-0 flex z-40">
                    <div data-todo-at-click="sidebarOpen = false" data-todo-x-show="sidebarOpen" data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition-opacity ease-linear duration-300" data-todo-x-transition-enter-start="opacity-0" data-todo-x-transition-enter-end="opacity-100" data-todo-x-transition-leave="transition-opacity ease-linear duration-300" data-todo-x-transition-leave-start="opacity-100" data-todo-x-transition-leave-end="opacity-0" className="fixed inset-0" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                    </div>
                    <div data-todo-x-show="sidebarOpen" data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state." data-todo-x-transition-enter="transition ease-in-out duration-300 transform" data-todo-x-transition-enter-start="-translate-x-full" data-todo-x-transition-enter-end="translate-x-0" data-todo-x-transition-leave="transition ease-in-out duration-300 transform" data-todo-x-transition-leave-start="translate-x-0" data-todo-x-transition-leave-end="-translate-x-full" className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button data-todo-x-show="sidebarOpen" data-todo-at-click="sidebarOpen = false" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                News Portal
                            </div>
                            <nav className="mt-5 px-2 space-y-1">


                                {/* Current: "bg-indigo-800 text-white", Default: "text-white hover:bg-indigo-600 hover:bg-opacity-75" */}
                                <LinkContainer to="/" className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                    <span>
                                        <svg className="mr-4 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    Home
                                    </span>
                                </LinkContainer>


                                <LinkContainer to="/contact" className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                    <span>
                                        <svg className="mr-4 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    Contact
                                    </span>
                                </LinkContainer>

                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                            <a href="/" className="flex-shrink-0 group block">
                                <div className="flex items-center">
                                    <div>
                                        <img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-medium text-white">
                                            Tom Cook
                                        </p>
                                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                                            View profile
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </div>

            <div className="hidden bg-indigo-700 md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">

                    <div className="flex flex-col h-0 flex-1">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                               <span className="text-white font-bold text-2xl uppercase">News Portal</span>
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1">

                                <LinkContainer to="/" className="bg-indigo-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <span>
                                        <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    Home
                                    </span>
                                </LinkContainer>

                                <LinkContainer to="/contact" className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <span>
                                        <svg className="mr-3 h-6 w-6 text-indigo-300" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    Contact
                                    </span>
                                </LinkContainer>

                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                            <a href="/" className="flex-shrink-0 w-full group block">
                                <div className="flex items-center">
                                    <div>
                                        <img className="inline-block h-9 w-9 rounded-full" src="https://lh3.googleusercontent.com/-8_0FPjzPyvk/YAc3CpRFlCI/AAAAAAAAnGY/032IVHMBSG05TE5e4gPKYrR2IIVF53VugCEwYBhgLKtQDAL1OcqxMqUMKMWWT6SMPM1ZJfKxNIxS3T5ZVStMXXKo8SWNIhh_0S0eFRX2h0FpsET3kPEKhfkK66ok-EIQegWGB-BArzyVm4zOf2pnCrRKYBkjbDJzFdBrT1YeSM7m-2X9N4Wi6PemupPvvQFlBBqT8lX0SC0A3BPoUDhHqBUDXqDpgz2hK8CJDCaCSvZdRVMFhmm0UCSv3gpoTzXj4gwuKWJQYDILn8x3B7V2-SRGP8-F3yLaxfqKeN1apEtsg-PyU9ckrcmlz_WgdAMSlfXM1vH_s0co1jOUjUrI8U9bgUuZKOFgruVMg0qMrE8sSSTZgNXcQXQxMlYm0eNOkyf3fZVEENnXWevDkR3GqWk3LSA1oZggDuVv4ka2Wgc3K5H6-HSBd8gwJW2spQxoE3fPqOJp6bGEKwZuNPIj4epCXBdPjPxFrdD7ZOEyVHCExx0hnT0Av-FVv6xeGdaehCCXfZC465sar1XbiPMSuzBv-g3FxlH1DeROx5v1yfnFl8C8MsxY-k2hExah9dSsMGlDiQtowL6i7huELSQ8PFBIubqbQIVNzthvdwvWXlDl1K6lQ2_jbJLOvLorQv-6PbgkOFACQZ_zCzdfq0GCLSHv8D2eFMMv8voIG/w140-h140-p/admin.jpg" alt=""/>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-white">
                                            Anuz Pandey
                                        </p>
                                        <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                                            View profile
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

// <Navbar className={'yellotail'}>
//     <LinkContainer to="/">
//         <Navbar.Brand>The Daily News</Navbar.Brand>
//     </LinkContainer>
// </Navbar>
// <Nav>
//     <Nav.Item>
//         <LinkContainer to="/">
//             <Nav.Link>Home</Nav.Link>
//         </LinkContainer>
//     </Nav.Item>
//     <Nav.Item>
//         <LinkContainer to="/contact">
//             <Nav.Link>Contact</Nav.Link>
//         </LinkContainer>
//     </Nav.Item>
// </Nav>
