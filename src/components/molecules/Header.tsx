import { type FC } from 'react';
import { FaGithub } from 'react-icons/fa';

const Header: FC = () => {
    return (
        <nav className="sticky top-0 bg-white shadow">
            <div className="flex justify-center h-12 px-4">
                <div className="flex justify-between items-center w-full max-w-screen-xl">
                    <span>Yeju Choi</span>
                    <div className="flex items-center gap-1 bg-white">
                        <a href="/#">
                            <span className="my-2 transition-colors duration-300 transform text-sm text-gray-600 hover:text-blue-500 md:mx-4 md:my-0">
                                About me
                            </span>
                        </a>
                        <a href="/#">
                            <span className="my-2 transition-colors duration-300 transform text-sm text-gray-600 hover:text-blue-500 md:mx-4 md:my-0">
                                Skills
                            </span>
                        </a>
                        <a href="/#">
                            <span className="my-2 transition-colors duration-300 transform text-sm text-gray-600 hover:text-blue-500 md:mx-4 md:my-0">
                                Career
                            </span>
                        </a>
                        <a href="/#">
                            <span className="my-2 transition-colors duration-300 transform text-sm text-gray-600 hover:text-blue-500 md:mx-4 md:my-0">
                                Projects
                            </span>
                        </a>
                        <button
                            type="button"
                            className="cursor-pointer p-2 rounded-full"
                            onClick={() => window.open('https://github.com/cyeju', '_blank')}
                        >
                            <FaGithub className="transition-colors duration-300 transform w-5 h-5 text-gray-900 hover:text-purple-800" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
