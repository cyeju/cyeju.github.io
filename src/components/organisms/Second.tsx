'use client';

import type { FC } from 'react';
import ColorSection from '@/components/atoms/ColorSection';
import { skillList } from '@/constants';

const Second: FC = () => {
    return (
        <ColorSection>
            <div>
                <span>기술스택</span>
            </div>
            <div>
                <div>
                    {skillList.map(({ skillName, comment }) => {
                        return (
                            <div key={skillName} className="relative group inline-block">
                                <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">
                                    {skillName}
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap rounded bg-gray-800 text-white text-sm px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <button type="submit">{comment}</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ColorSection>
    );
};

export default Second;
