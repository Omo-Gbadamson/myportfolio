import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/worked'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return (
        <Layout>
            <Container>
                <Title>
                   HouseBen <Badge>2022</Badge> 
                </Title>
                <P> A real Estate based platform built on the thought line of Property seekers have the flexibility of choice over the proprety of their desrie at a reasonable pricing</P>
                <List ml={4}> my={4}
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.realdubai.vercel.app"> https://www.realdubai.vercel.app <ExternalLinkIcon mx="2px"/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/MacOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, NextJS, ReactJs,</span>
                </ListItem>
                </List>
                <WorkImage src="/images/works/real.png" alt="HouseBen"/>
            </Container>
        </Layout>
    )
}

export default Work