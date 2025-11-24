import { useState, type FC } from 'react';
import { menuList } from '@/constants';

const DrawerAppBar: FC = () => {
    const [, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <div>
                <div>Menu Icon</div>
                <span>Yeju Choi</span>
                <div>
                    {menuList.map(({ menuName }) => (
                        <button key={menuName} type="submit">
                            {menuName}
                        </button>
                    ))}
                </div>
            </div>
            <nav>
                <button type="button" onClick={handleDrawerToggle} className="flex flex-col items-start">
                    <span>Yeju Choi</span>
                    <hr className="w-full my-1" />
                </button>

                <ul className="mt-2">
                    {menuList.map(({ menuName }) => (
                        <li key={menuName}>
                            <button type="submit" className="py-1 text-left w-full">
                                {menuName}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default DrawerAppBar;
