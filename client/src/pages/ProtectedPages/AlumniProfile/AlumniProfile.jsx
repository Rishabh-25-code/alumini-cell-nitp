import { PageHeading } from "../../../components/Headings/Heading"
import useAuth from "../../../hooks/useAuth";
import CreateAlumniProfile from "./CreateAlumniProfile";
import Meta from "../../../components/Meta/Meta";


const AlumniProfile = () => {
  const { user } = useAuth();

  return (
    <div className='lg:px-9 px-4'>
      <Meta title="Profile | Alumni NITP" />
      <PageHeading heading='Alumni' heading1='Profile' />
      <CreateAlumniProfile />
    </div>
  )
}

export default AlumniProfile;