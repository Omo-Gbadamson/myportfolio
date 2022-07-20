import NextLink from 'next/link'
import {Box, Heading, Container, Text, Divider, Button} from '@chakra-ui/react'

const NotFound =()=>{
    return(
        <Container>
            <Heading as="h1">Can't See it Yet?</Heading>
            <Text>Oh No!!! 😯, This page is too beautiful to be seen at this time, check back a few moment later 😎</Text>
            <Divider my={6}/>
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Check my Homepage again 😎</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound