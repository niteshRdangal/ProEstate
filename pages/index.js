import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Button, Text} from '@chakra-ui/react';
import Property from "../Components/Property";
import {baseUrl, Api} from '../utility/Api';

const PropertyTypes = ({type, imageUrl, title, details,linkName,buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10"> {/*m stands for margin*/}
    <Image src={imageUrl} width = {500} height= {300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{type}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.600">{details}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {
  console.log(propertiesForRent, propertiesForSale)
  return (
    <div >

      <PropertyTypes
        type = "Property To Rent"
        title = "Rental Property For you"
        details = "Explore Your future Rental"
        buttonText = "I want to Rent"
        linkName = "/search?type=for-rent"
        imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <Flex flexWrap = "wrap">
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <PropertyTypes
      type = "Property To Buy"
      title = "Your Dream Property"
      details = "Explore Your future Property"
      buttonText = "I want to Buy"
      linkName = "/search?type=for-buy"
      imageUrl = "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    />

    <Flex flexWrap = "wrap">
    {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>



    </div>
  )
}

export async function getStaticProps(){
  {/*This is where we will access the api calls*/ }
  const propertyForSale = await Api(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await Api(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props : {
      propertiesForSale : propertyForSale?.hits,
      propertiesForRent : propertyForRent?.hits,
    },
  };
}
