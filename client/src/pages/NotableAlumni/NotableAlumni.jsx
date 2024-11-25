import React, {useState} from 'react'
import Heading from '../../components/Headings/Heading'
import { getDocuments, createDocument, deleteDocument } from '../../services/documents';
import AlumniCard from './AlumniCard'
import { useQuery } from '@tanstack/react-query';
import Meta from '../../components/Meta/Meta'

const NotableAlumni = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { isLoading, data, isError } = useQuery({
    queryKey: ['notable-alumni', page],
    queryFn: () => getDocuments('notable-alumni', 25, 25 * (page - 1)),
    staleTime: 1000 * 60 * 3,
  });


  const notableAlums = [
    {
      name: "Manas Bihari Verma",
      designation: "Scientist",
      about: "Manas Bihari Verma was an Indian aeronautical scientist instrumental in the development of the light combat aircraft, Tejas. In 2018, he was conferred the Padma Sri civilian honour by the President of India. After his retirement he launched Mobile Science Lab aimed at promoting science education in Bihar.",
      image: "./notable-alumni/manas-bihari-verma.jpg",
      id: 1
    },
    {
      name: "Shri. Nitish Kumar",
      designation: "Chief Minister of Bihar",
      about: "Nitish Kumar is an Indian politician who has been the Chief Minister of Bihar, a state in eastern India, since 2017. Previously he served as the Chief Minister of Bihar from 2005 to 2014 and from 2015 to 2017.",
      image: "./notable-alumni/nitish-kumar.webp",
      id: 2
    },
    {
      name: "Dr. Ratan Kumar Sinha",
      designation: "Former Chairman, Atomic Energy Commission",
      about: "Dr. Ratan Kumar Sinha is an Indian nuclear scientist who served as the chairman of the Atomic Energy Commission of India and the Secretary to the Government of India, Department of Atomic Energy from 2012 to 2015.",
      image: "./notable-alumni/Ratan_Kumar_Sinha.jpg",
      id: 3
    },
    {
      name: "Bindeshwari Dubey",
      designation: "Former Chief Minister of Bihar",
      about: "Bindeshwari Dubey was an Indian politician from Bihar. He was a member of the Indian National Congress and served as the Chief Minister of Bihar from 1985 to 1988.",
      image: "./notable-alumni/vindeshwari-dubey.webp",
      id: 4
    },
    {
      name: "Shri Arun Kumar Singh",
      designation: "Chairman & CEO, ONGC, (B.Tech- ME, NIT Patna)",
      about: "A proud alumnus of NIT , Patna, Shri Arun Kumar Singh completed his Bachelor's degree in Mechanical Engg. He currently serves as the Chairman & CEO at Oil and Natural Gas Corporation Ltd, Prior to this, he held the distinguished role of Chairman & MD at Bharat Petroleum Corporation Limited. His extensive experience and profound knowledge have played a pivotal role in shaping the landscape of the oil and gas industry in India.",
      image: "https://cloud.appwrite.io/v1/storage/buckets/6593b1b8b109a7de4596/files/65b0ecbe5c63f42ad2cf/view?project=65911d3f132f4163e49b&mode=admin",
      id: 8
    },
    {
      name: "Usha Singh",
      designation: "HR Director at MOIL LIMITED",
      about: "Ms. Usha Singh, our alumna from ECE department, she is the In-charge CMD and first Director (HR) at MOIL Limited, boasts over 30 years of experience, including key roles at NMDC and SAIL, and has received global recognition as one of the top 100 Inspirational Women in Mining in 2020. She holds an Engg. degree and an MBA, with numerous awards for her contributions to the industry.",
      image: "https://media.licdn.com/dms/image/D4E03AQGb1IYHU037Ig/profile-displayphoto-shrink_400_400/0/1669020811402?e=1711584000&v=beta&t=X13oegTbL3_LR9p-DP4TIGzf8E_t_vecOVQEP5FzYjU",
      id: 9
    },
    {
      name: "Bhubaneswar Behera",
      designation: "Engineer, writer and scholar",
      about: "Bhubaneswar Behera was an engineer, writer and scholar from the Kalahandi district of Odisha. He was born in a village called Kusurla in Kalahandi district. He was the first person from Kalahandi to become an engineer.",
      image: "./notable-alumni/bubneshwar-behere.jpg",
      id: 5
    },
    {
      name: "Ajit Kumar Mehta",
      designation: "Former Member of Parliament",
      about: "Ajit Kumar Mehta was member of 6th Lok Sabha from Samastipur in Bihar State, India. He was elected to 7th, 11th and 12th Lok Sabha from Samastipur. Before joining active politics, Mehta was an educationist, working as professor at Birla Institute of Technology Mesra. ",
      image: "./notable-alumni/Ajit_Kumar_Mehta.jpg",
      id: 7
    }
  ]


  return (
    <div className=''>
      <Meta name="Notable Alumni" />
      <Heading heading="Notable Alumni" heading1="of NIT Patna"></Heading>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 px-6 lg:gap-6 gap-8 py-16'>
        {data && data.length > 0?
          data.map((alum, i) => (
            <AlumniCard key={i} alum={alum} />
          )):""
        }
      </div>
    </div>
  )
}

export default NotableAlumni