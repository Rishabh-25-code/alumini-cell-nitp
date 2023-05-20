import React from 'react'
import BlogCard from '../AlumniCorner/BlogCard'
import Heading from '../../components/Headings/Heading'

const Blogs = () => {

    const blogs = [
    {
      id: 0,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 0,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },
    {
      id: 1,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
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
      id: 2,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 2,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },
    {
      id: 3,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 3,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },
    {
      id: 4,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 4,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },
    {
      id: 5,
      name: "Blog Title",
      description: "The BCE-NITP Alumni Association cordially invites you to participate along with your family in the Annual Meet -2019 on 3rd February 2019.",
      image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
      link: "https://medium.com/@sudhanshur705/how-to-use-ipfs-in-your-react-app-1b2e2d7c8c3a",
      clubName: "Alumni Cell",
      tag: ["tag1", "tag2", "tag3"],
      author: "Author name",
      likes: 29,
      date: "2022-10-15T00:00:00.000Z",
      comments: [
        {
          id: 5,
          text: "A real-world utility project solving liquidity in the NFT market.",
        },
      ]
    },
  ]

  return (
    <div>
        <Heading heading="Blogs"></Heading>
         <div className='flex flex-wrap gap-6 m-auto px-5 items-center justify-center mb-32'>
        {blogs.map((project, id) => (
          <BlogCard data={project} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Blogs