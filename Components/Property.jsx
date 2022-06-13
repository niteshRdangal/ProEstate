import Link from 'next/link'

const Property = ({property : {coverPhote, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
   <Link href={`/property/${externalID}`} passHref>
   
   
   
   </Link>
);

export default Property;