import type { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="flex justify-center bg-white shadow z-50">
            <div className="flex justify-center items-center w-full max-w-3xl py-1 px-4">
                <p className="items-center gap-2 text-gray-600 text-xs">© 2025 Yeju Choi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
