import React from 'react'
import { useParams } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import Heading from '../../components/Headings/Heading'

const Blog = () => {

    const { blogId } = useParams();

    const blogs = [
    {
      id: 0,
      name: "How to use IPFS in your React App",
      description: "IPFS is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open. In this blog, we will learn how to use IPFS in your React App.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "TESLA Club",
      tag: ["IPFS", "ReactJs", "Web3"],
      author: "Yugank Verma",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },


    {
      id: 1,
      name: "Algorand and the Pioneer’s Blockchain",
      description: "The article by Harsh Kumar is a series that explores the blockchain technology behind Algorand with the reference of Harry Poter novel.the author introduces Algorand as a decentralized, scalable, and secure blockchain platform and discusses its key features, such as consensus mechanism and transaction speed. The article also covers the early history and development of Algorand and its founding team.",
      image: "https://source.unsplash.com/JN0SUcTOig0",
      link: "https://medium.com/@harshkumar62367/algorand-and-the-pioneers-blockchain-the-beginning-of-a-decentralized-journey-part-1-f76679a28cf0",
      clubName: "TESLA Club",
      tag: ["Algorand", "Harry Potter",],
      author: "Harsh Kumar",
      likes: 25,
      date: "2023-02-24T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "One of the best and most interesting blogs found on the internet for Alogrand Blockchain. Really liked it😍",
        },
      ]
    },
    {
      id: 2,
      name: "Avalanche consensus protocol SIMPLIFIED!!!",
      description: "It is a beginner-friendly introduction to the Avalanche consensus protocol. The author explains the problem of achieving consensus in a distributed network and how Avalanche solves this problem. The article provides a clear and concise overview of the Avalanche consensus protocol and its potential applications.",
      image: "https://source.unsplash.com/jmURdhtm7Ng",
      link: "https://medium.com/@nikhilgupta3501/avalanche-consensus-protocol-simplified-8542e9b36ea4",
      clubName: "TESLA club",
      tag: ["Avalanche", "decentralized",],
      author: "Nikhil Gupta",
      likes: 19,
      date: "2022-12-05T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "Very concise and easy to understand blog on Avalanche consensus.",
        },
      ]
    },
    {
      id: 3,
      name: "Filecoin Orbit Member",
      description: "The author shares their experience as a participant in the program and highlights the benefits of being a part of a supportive and collaborative community. The article also provides an overview of Filecoin and its underlying technology, as well as some insights into the potential use cases for the network.",
      image: "https://source.unsplash.com/JN0SUcTOig0",
      link: "https://medium.com/@harshkumar62367/my-experience-as-filecoin-orbit-member-ef438ff14fa0",
      clubName: "TESLA Club",
      tag: ["Filecon", "community", "tech",],
      author: "Harsh Kumar",
      likes: 9,
      date: "2021-09-06T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "Looks like Filecoin is a great community to work with and really excited to work with them in the near future.",
        },
      ]
    },
    {
      id: 4,
      name: "AlgoChat: The Ultimate Algorand GPT-3 Chatbot",
      description: "The article discusses the development of a chatbot called AlgoChat that utilizes GPT-3 technology to facilitate communication within the Algorand ecosystem. The author provides a detailed explanation of the chatbot's features, including its ability to answer queries related to Algorand",
      image: "https://source.unsplash.com/ioyEITUD2G8",
      link: "https://medium.com/@yverma0720/algochat-the-ultimate-algorand-gpt-3-chatbot-b2169579e77c",
      clubName: "TESLA Club",
      tag: ["Algorand", "ChatGPT", "AI",],
      author: "Yugank Verma",
      likes: 39,
      date: "2023-02-08T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "What a utility tool it is!!!",
        },
      ]
    },
    {
      id: 5,
      name: "Introduction to Polkadot",
      description: "Provides an overview of Polkadot, a next-generation blockchain platform that aims to connect different blockchain networks together. The author explains the key concepts of Polkadot, and discusses the benefits of using Polkadot for building decentralized applications.",
      image: "https://source.unsplash.com/ioyEITUD2G8",
      link: "https://medium.com/@yverma0720/introduction-to-polkadot-4ee164744435",
      clubName: "TESLA Club",
      tag: ["Polkadot",],
      author: "Yugank Verma",
      likes: 12,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 1,
          text: "One of the beginner guide on Polkadot.",
        },
      ]
    },
  ]

    return (
        <div className='pt-36'>
            {/* <Heading heading="Blog"></Heading> */}
            {
                <div className='m-auto flex flex-col items-center justify-center'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-sky-500 my-10 mt-6'>{blogs[blogId].name}</h1>

                    <div className='flex items-center h-56 overflow-hidden lg:w-[70%] md:w-[80%] w-[85%] rounded-lg border border-gray-900'>
                        <img className='w-full' src={blogs[blogId].image} alt={blogs[blogId].title} />
                    </div>

                    <div className='flex items-center p-5'>
                        <p className='text-gray-400'>{blogs[blogId].author}</p>
                        <BsDot size={20} className='text-gray-300' />
                        <p className='text-gray-400'>{new Intl.DateTimeFormat('en-AU').format(new Date(blogs[blogId].date))}</p>
                        <BsDot size={20} className='text-gray-300' />
                        <p className='text-gray-400'>3 min read</p>
                    </div>

                    <div className='lg:w-[70%] md:w-[80%] w-[85%] text-lg mt-10'>
                        <p className='text-gray-200'>{blogs[blogId].description}</p>


                        <p className='text-gray-400 text-base mt-4 mb-32'>Read the full blog <a className='text-blue-500' href={blogs[blogId].link} target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </div>
            }
        </div >
    )
}

export default Blog;