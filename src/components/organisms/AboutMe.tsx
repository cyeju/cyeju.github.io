'use client';

import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { AcademicCapIcon, CakeIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import Section from '@/components/atoms/Section';

const AboutMe: FC = () => {
    return (
        <div className="w-full shadow-[0_-50px_100px_rgba(0,0,0,0.08),0_50px_100px_rgba(0,0,0,0.08)]">
            <Section id="about">
                <div className="flex flex-col gap-16 items-center">
                    <h1 className="font-bold text-4xl text-gray-600">About Me</h1>
                    <div className="flex gap-8">
                        <div className="w-[240px]">
                            <Image alt="이미지" src="/image/cyeju.webp" width={240} height={240} />
                        </div>
                        <div className="flex flex-col gap-4 w-[240px]">
                            {[
                                { icon: <UserIcon />, name: '최예주' },
                                { icon: <CakeIcon />, name: '2001.10.19' },
                                { icon: <EnvelopeIcon />, name: 'yeju1019@gmail.com' },
                                { icon: <AcademicCapIcon />, name: '숭실대학교\nIT대학 글로벌미디어학부' },
                            ].map((v) => (
                                <p key={v.name} className="flex gap-4 items-center">
                                    {React.cloneElement(v.icon, { className: 'w-5 h-5 min-w-5 min-h-5' })}
                                    <span className="whitespace-pre-line">{v.name}</span>
                                </p>
                            ))}
                            <hr className="h-[1px] w-full border-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                            <div className="flex gap-2">
                                <a
                                    href="https://github.com/cyeju"
                                    target="_blank"
                                    className="text-gray-600 transition-colors duration-300 transform"
                                    aria-label="Github"
                                    rel="noreferrer"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://velog.io/@wings0of0bird/series"
                                    target="_blank"
                                    className="text-gray-600 transition-colors duration-300 transform"
                                    aria-label="Github"
                                    rel="noreferrer"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Velog--Streamline-Simple-Icons"
                                    >
                                        <path
                                            d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3 -1.338 3 -3V3c0 -1.662 -1.338 -3 -3 -3H3Zm6.883 6.25c0.63 0 1.005 0.3 1.125 0.9l1.463 8.303c0.465 -0.615 0.846 -1.133 1.146 -1.553 0.465 -0.66 0.893 -1.418 1.283 -2.273 0.405 -0.855 0.608 -1.62 0.608 -2.295 0 -0.405 -0.113 -0.727 -0.338 -0.967 -0.21 -0.255 -0.608 -0.577 -1.193 -0.967 0.6 -0.765 1.35 -1.148 2.25 -1.148 0.48 0 0.878 0.143 1.193 0.428 0.33 0.285 0.494 0.704 0.494 1.26 0 0.93 -0.39 2.093 -1.17 3.488 -0.765 1.38 -2.241 3.457 -4.431 6.232l-2.227 0.156 -1.711 -9.628h-2.25V7.24c0.6 -0.195 1.305 -0.406 2.115 -0.63 0.81 -0.24 1.358 -0.36 1.643 -0.36Z"
                                            fill="#000000"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AboutMe;
