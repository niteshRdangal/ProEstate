import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Button, Text} from '@chakra-ui/react';


const Types = ({type, imageUrl, title, details,linkName,buttonText}) => (
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

export default function Home() {
  return (
    <div >
      <h1>Hello world</h1>

      <Types
        type = "Property To Rent"
        title = "Rental Property For you"
        details = "Explore Your future Rental"
        buttonText = "I want to Rent"
        linkName = "/search?type=for-rent"
        imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <Types
      type = "Property To Buy"
      title = "Your Dream Property"
      details = "Explore Your future Property"
      buttonText = "I want to Buy"
      linkName = "/search?type=for-buy"
      imageUrl = "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    />

    </div>
  )
}
