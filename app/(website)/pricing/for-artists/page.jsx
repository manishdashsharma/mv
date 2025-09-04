'use client'
import Faq from '@/components/website/Faq'
import LetTheWorld from '@/components/website/LetTheWorld'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import herobg from '@/public/images/mvadvertisement/herobg.png'
import { HeadingText, MainHeadingText } from '@/components/FixedUiComponents'
import { Button } from '@/components/ui/button'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { MdOutlineDone } from 'react-icons/md'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { PiCrownFill } from "react-icons/pi";
import { GiQueenCrown } from "react-icons/gi";


import { Anton } from 'next/font/google'
import ApplyToJoin from '@/components/website/ApplyToJoin'
import Link from 'next/link'
const anton = Anton({
    weight: ['400'],
    subsets: ['latin']
})

const standardData = [
    { title: 'Unlimited Release', info: 'Release an unlimited number of tracks.' },
    { title: 'One artist profile, can collaborate with others', info: 'Manage a single artist profile and collaborate on tracks.' },
    { title: '70% Of The Net Revenue', info: 'You retain 70% of the net revenue generated from your releases.' },
    { title: 'YouTube Content ID', info: 'Monetize your music on YouTube and protect it from unauthorized use.' },
    { title: 'Meta Content ID', info: 'Protect and monetize your music across Meta platforms (Facebook, Instagram).' },
    { title: 'Analytics Centre', info: 'Access detailed analytics on your streams, audience, and revenue.' },
    { title: 'Available to all 150 stores', info: 'Your music will be distributed to over 150 digital music stores and platforms worldwide.' },
    { title: 'Worldwide availability', info: 'Your music will be available globally.' },
    { title: 'Free UPC Code', info: 'A unique UPC code will be provided for each release.' },
    { title: 'Free ISRC Code', info: 'A unique ISRC code will be provided for each track.' },
    { title: 'Lifetime availability', info: 'Your music will remain on platforms indefinitely.' },
    { title: 'Support Time 48 Business Hours', info: 'Receive support within 48 business hours.' },
    { title: 'Live in 48 to 72 Business Hours', info: 'Your music will be live on platforms within 48 to 72 business hours.' }
]

const popularData = [
    { title: 'Unlimited release', info: 'Release an unlimited number of tracks.' },
    { title: 'One artist profile, can collaborate with others', info: 'Manage a single artist profile and collaborate on tracks.' },
    { title: '80% of the net revenue', info: 'You retain 80% of the net revenue generated from your releases.' },
    { title: 'YouTube Content ID', info: 'Monetize your music on YouTube and protect it from unauthorized use.' },
    { title: 'Meta Content ID', info: 'Protect and monetize your music across Meta platforms (Facebook, Instagram).' },
    { title: 'YouTube OAC', info: 'Access a YouTube Official Artist Channel.' },
    { title: 'Analytics Centre', info: 'Access detailed analytics on your streams, audience, and revenue.' },
    { title: 'Dolby Atmos Distribution', info: 'Distribute your music in immersive Dolby Atmos format.' },
    { title: 'Available to all 150 stores', info: 'Your music will be distributed to over 150 digital music stores and platforms worldwide.' },
    { title: 'Worldwide availability', info: 'Your music will be available globally.' },
    { title: 'Free UPC Code', info: 'A unique UPC code will be provided for each release.' },
    { title: 'Free ISRC Code', info: 'A unique ISRC code will be provided for each track.' },
    { title: 'Lifetime availability', info: 'Your music will remain on platforms indefinitely.' },
    { title: 'Support Time 48 Business Hours', info: 'Receive support within 48 business hours.' },
    { title: 'Live in 48 to 72 Business Hours', info: 'Your music will be live on platforms within 48 to 72 business hours.' }
]

const bestValueData = [
    { title: 'Unlimited release', info: 'Release an unlimited number of tracks.' },
    { title: '95% of the net revenue', info: 'You retain 95% of the net revenue generated from your releases.' },
    { title: 'YouTube Content ID', info: 'Monetize your music on YouTube and protect it from unauthorized use.' },
    { title: 'Meta Content ID', info: 'Protect and monetize your music across Meta platforms (Facebook, Instagram).' },
    { title: 'YouTube OAC', info: 'Access a YouTube Official Artist Channel.' },
    { title: 'One artist profile, can collaborate with others', info: 'Manage a single artist profile and collaborate on tracks.' },
    { title: 'Analytics Centre', info: 'Access detailed analytics on your streams, audience, and revenue.' },
    { title: 'Dolby Atmos Distribution', info: 'Distribute your music in immersive Dolby Atmos format.' },
    { title: 'Spotify Discovery Mode', info: 'Opt-in to Spotify Discovery Mode to increase your reach.' },
    { title: 'Available to all 150 stores', info: 'Your music will be distributed to over 150 digital music stores and platforms worldwide.' },
    { title: 'Worldwide availability', info: 'Your music will be available globally.' },
    { title: 'Free UPC Code', info: 'A unique UPC code will be provided for each release.' },
    { title: 'Free ISRC Code', info: 'A unique ISRC code will be provided for each track.' },
    { title: 'Lifetime availability', info: 'Your music will remain on platforms indefinitely.' },
    { title: 'Support Time 24 Business Hours', info: 'Receive support within 24 business hours.' },
    { title: 'Live in 48 to 72 Business Hours', info: 'Your music will be live on platforms within 48 to 72 business hours.' }
]

// Data for the comparison table
const comparisonData = [
    { feature: 'Royalty Share', standard: '70%', popular: '80%', bestValue: '95%' },
    { feature: 'No. of Releases', standard: 'Unlimited', popular: 'Unlimited', bestValue: 'Unlimited' },
    { feature: 'One artist profile, can collaborate with others', standard: true, popular: true, bestValue: true },
    { feature: 'YouTube Content ID', standard: true, popular: true, bestValue: true },
    { feature: 'Meta Content ID', standard: true, popular: true, bestValue: true },
    { feature: 'YouTube OAC', standard: false, popular: true, bestValue: true },
    { feature: 'Analytics Centre', standard: true, popular: true, bestValue: true },
    { feature: 'Available to all 150 stores', standard: true, popular: true, bestValue: true },
    { feature: 'Dolby Atmos Distribution', standard: false, popular: true, bestValue: true },
    { feature: 'Spotify Discovery Mode', standard: false, popular: false, bestValue: true },
    { feature: 'Worldwide availability', standard: true, popular: true, bestValue: true },
    { feature: 'Free UPC Code', standard: true, popular: true, bestValue: true },
    { feature: 'Free ISRC Code', standard: true, popular: true, bestValue: true },
    { feature: 'Lifetime availability', standard: true, popular: true, bestValue: true },
    { feature: 'Support Time', standard: '48 Business hr', popular: '48 Business hr', bestValue: '24 Business hr' },
    { feature: 'Live in', standard: '48 to 72 Business hr', popular: '48 to 72 Business hr', bestValue: '48 to 72 Business hr' }
]

const PageForArtists = () => {
    const [hoveredItem, setHoveredItem] = useState(null)

    return (
        <div className="overflow-x-hidden ">
            <div className="min-h-[100vh] overflow-x-hidden relative pt-1 ">
                <div
                    style={{ backgroundImage: `url(${herobg.src})` }}
                    className="bg-cover absolute bg-center h-[130vh]  w-full pt-[150px]"></div>

                <div className="relative flex flex-col items-center w-full mt-[150px]">
                    <MainHeadingText
                        text="Pick the Perfect Plan "
                        text2="for You"
                    />
                </div>

                <div className=' relative flex items-center justify-center w-full mt-10 gap-5 text-white'>
                    <Button variant="ghost" className='w-[200px] '><Link href='/pricing/everyone' > Plans for Everyone </Link> </Button>
                    <Button variant="blue" className='w-[200px] '> <Link href='/pricing/for-artists' > Plans for Artists</Link> </Button>
                    <Button variant="ghost" className='w-[200px] '> <Link href='/pricing/for-labels'>Plans for Labels</Link> </Button>
                </div>

                <div className="mt-30 flex flex-col lg:flex-row  justify-center max-lg:items-center gap-10 ">
                    {/* Standard Plan */}
                    <div className="w-[350px] mt-10 p-6 bg-[#0F0F0F] rounded-xl relative pb-40">
                        <h1 className={`text-xl ${anton.className} text-white uppercase mb-4`}>Maheshwari Standard</h1>
                        <div className="flex flex-wrap items-center gap-2 border-b border-gray-600 pb-8 mb-8">
                            <h1 className="text-[#652CD6] font-semibold text-4xl flex items-center">
                                <FaIndianRupeeSign />
                                499
                            </h1>
                            <h1 className="text-gray-300 opacity-70 text-2xl relative">
                                {' '}
                                <div className="w-full h-[2px] bg-gray-300 absolute top-[16px] left-0 "></div>{' '}
                                <FaIndianRupeeSign className="inline-block" />
                                699 
                            </h1>
                             <h1 className="text-gray-300 opacity-70 text-sm relative">       
                                 /3 MONTHS
                            </h1>
                        </div>

                        {standardData.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center space-y-4 relative ">
                                <div className="flex items-center gap-2">
                                    <MdOutlineDone className="text-[#0099FF] bg-[#0099FF]/10 w-8 h-8 p-2 rounded-full text-lg" />
                                    <h1 className="text-gray-300 text-sm">{item.title}</h1>
                                </div>
                                <div
                                    className="relative "
                                    onMouseEnter={() => setHoveredItem({ type: 'standard', index: index })}
                                    onMouseLeave={() => setHoveredItem(null)}>
                                    <IoMdInformationCircleOutline className="text-gray-500 w-6 h-6 text-lg cursor-pointer" />
                                    {hoveredItem?.type === 'standard' && hoveredItem?.index === index && (
                                        <motion.div
                                            whileInView={{ y: -10 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2  p-2 bg-gray-700 text-white text-xs rounded shadow-lg w-[200px]  border border-gray-600 z-10">
                                            {item.info}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Best Value Plan */}
                    <div className="w-[350px] mt-0 p-6 bg-[#0F0F0F] rounded-xl relative pb-40 border border-yellow-400">
                        <PiCrownFill  className='text-yellow-300 absolute right-[-30px] top-[-30px] rotate-[35deg] text-[70px]' />

                        <h1 className={`text-xl ${anton.className} text-white uppercase mb-4`}>Maheshwari Best Value</h1>
                        <div className="flex flex-wrap items-center gap-2 border-b border-gray-600 pb-8 mb-8">
                            <h1 className="text-[#652CD6] font-semibold text-4xl flex items-center">
                                <FaIndianRupeeSign />
                                1499
                            </h1>
                            <h1 className="text-gray-300 opacity-70 text-2xl relative">
                                {' '}
                                <div className="w-full h-[2px] bg-gray-300 absolute top-[16px] left-0 "></div>{' '}
                                <FaIndianRupeeSign className="inline-block" />
                                1999
                            </h1>
                             <h1 className="text-gray-300 opacity-70 text-sm relative">       
                                 /3 MONTHS
                            </h1>
                        </div>

                        {bestValueData.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center space-y-4 relative">
                                <div className="flex items-center gap-2">
                                    <MdOutlineDone className="text-[#FFC727] bg-[#FFC727]/10 w-8 h-8 p-2 rounded-full text-lg" />
                                    <h1 className="text-gray-300 text-sm">{item.title}</h1>
                                </div>
                                <div
                                    className="relative "
                                    onMouseEnter={() => setHoveredItem({ type: 'bestValue', index: index })}
                                    onMouseLeave={() => setHoveredItem(null)}>
                                    <IoMdInformationCircleOutline className="text-gray-500 w-6 h-6 text-lg cursor-pointer" />
                                    {hoveredItem?.type === 'bestValue' && hoveredItem?.index === index && (
                                        <motion.div
                                            whileInView={{ y: -10 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-700 text-white text-xs rounded shadow-lg w-[200px]  border border-gray-600 z-10">
                                            {item.info}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Popular Plan */}
                    <div className="w-[350px] mt-10 p-6 bg-[#0F0F0F] rounded-xl relative pb-40 ">
                        <h1 className={`text-xl ${anton.className} text-white uppercase mb-4`}>Maheshwari popular</h1>
                        <div className="flex flex-wrap items-center gap-2 border-b border-gray-600 pb-8 mb-8">
                            <h1 className="text-[#652CD6] font-semibold text-4xl flex items-center">
                                <FaIndianRupeeSign />
                                899
                            </h1>
                            <h1 className="text-gray-300 opacity-70 text-2xl relative">
                                {' '}
                                <div className="w-full h-[2px] bg-gray-300 absolute top-[16px] left-0 "></div>{' '}
                                <FaIndianRupeeSign className="inline-block" />
                                1299 
                            </h1>
                            <h1 className="text-gray-300 opacity-70 text-sm relative">       
                                 /3 MONTHS
                            </h1>
                            
                        </div>

                        {popularData.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center space-y-4 relative">
                                <div className="flex items-center gap-2">
                                    <MdOutlineDone className="text-[#652CD6] bg-[#652CD6]/10 w-8 h-8 p-2 rounded-full text-lg" />
                                    <h1 className="text-gray-300 text-sm">{item.title}</h1>
                                </div>
                                <div
                                    className="relative "
                                    onMouseEnter={() => setHoveredItem({ type: 'popular', index: index })}
                                    onMouseLeave={() => setHoveredItem(null)}>
                                    <IoMdInformationCircleOutline className="text-gray-500 w-6 h-6 text-lg cursor-pointer" />
                                    {hoveredItem?.type === 'popular' && hoveredItem?.index === index && (
                                        <motion.div
                                            whileInView={{ y: -10 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-gray-700 text-white text-xs rounded shadow-lg w-[200px]  border border-gray-600 z-10">
                                            {item.info}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                   
                </div>

                {/* Compare Plan Section */}
                <div className="flex flex-col items-center justify-center w-full mt-40 mb-20">
                    <h1 className={`text-6xl ${anton.className} text-white uppercase mb-4`}>Compare Plan</h1>

                    <div className="w-full max-w-5xl bg-[#1A1E2B] rounded-xl p-8 mt-20">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 pb-8  text-gray-300 font-semibold text-lg">
                            <div></div> {/* Empty cell for alignment */}
                            <div className="text-center">Maheshwari Standard</div>
                            <div className="text-center">Maheshwari Popular</div>
                            <div className="text-center">Maheshwari Best Value</div>
                        </div>

                        {/* Table Rows */}
                        {comparisonData.map((row, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-4 gap-4 py-4 border-b border-gray-800 last:border-b-0">
                                <div className="text-gray-300 text-sm">{row.feature}</div>
                                <div className="text-center text-gray-400 text-sm">
                                    {typeof row.standard === 'boolean' ? (
                                        row.standard ? (
                                            <MdOutlineDone className="inline-block text-[#0099FF] w-5 h-5" />
                                        ) : (
                                            '-'
                                        )
                                    ) : (
                                        row.standard
                                    )}
                                </div>
                                <div className="text-center text-gray-400 text-sm">
                                    {typeof row.popular === 'boolean' ? (
                                        row.popular ? (
                                            <MdOutlineDone className="inline-block text-[#652CD6] w-5 h-5" />
                                        ) : (
                                            '-'
                                        )
                                    ) : (
                                        row.popular
                                    )}
                                </div>
                                <div className="text-center text-gray-400 text-sm">
                                    {typeof row.bestValue === 'boolean' ? (
                                        row.bestValue ? (
                                            <MdOutlineDone className="inline-block text-[#FFC727] w-5 h-5" />
                                        ) : (
                                            '-'
                                        )
                                    ) : (
                                        row.bestValue
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ApplyToJoin />
            <Faq />
        </div>
    )
}

export default PageForArtists