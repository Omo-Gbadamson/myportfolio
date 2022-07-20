import NextLink from 'next/link'
import {Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon} from '@chakra-ui/react' 
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear, Listed } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoMedium, IoLogoDiscord} from 'react-icons/io5'
import Moshtube from '../public/images/links/Gbadamosi Abubakar.png'
import HouseBen from '../public/images/works/real.png'


const Page = () =>{
    return (
       <Layout>
         <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb="6" p="3" align="center">
            Yo, I am Abubakar, a Software Developer based in Nigeria.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Abubakar Gbadamosi
                    </Heading>
                    <p>( Developer / Analyst / Designer / BlockChain Expert / Product Manager / Cloud Engineer )</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" 
                    maxWidth="100px" display="inline-block" borderRadius="full"
                    src="/images/myPic.jpg"
                    alt="Profile Picture"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                Abubakar is an astute lover of technology he wears many hat in the field of technology
                because of the passion he has in building what works and what solves problems. He is FullStack Developer,
                Cloud Engineer, Data Analyst, BlockChain Expert, Product Manager, UX Researcher, Digital Marketer, Writer and 
                Entreprenuer. He is vast having worked with different Programming languages like Python, javaScript, Rust and 
                some of their cool frameworks. Currently, he built a Real Estate Appication using Next Framework called {''}
                <NextLink href="/works/houseben"><Link>HouseBen</Link></NextLink>.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/work">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My PortFolio</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Born Lagos, Nigeria
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Graduated from University of Ilorin, Kwara State with a B Sc Degree in Economics under the Faculty of Social Science
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Obeys the Clarion call to serve his fatherland with a year long full of Dedication, Selflessness, Hardwork, Collaboration, Agility and Loyalty at such he was elected as the president of his CDS group.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    From the relief of lifting of the stay-at-home order due to the outburst of the novel Covid-19 virus, He was offered admission into CodeLab, a software development hub in his locality where he started pursuing careers in Software Development.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    He joined New Horizon, in the Q3 2021, where he faciliated training of over 300 students both on Web Development basics with HTML and CSS, and Programming basics with Python Programming Langauage. 
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                     Because of his love for technology and quest for knowlegde, he kept on learning and was selected in the following programmes: <br/>
                        <Listed>MS-ATO Software Development Trainining</Listed>
                        <Listed>Alx-T Data Analyst Nano Degree Program</Listed>
                        <Listed>Alx-T Financial Analyst Program</Listed>
                        <Listed>Global BlockChain Initiative (GBI)</Listed>
                        <Listed>EntryLevel Product Mangement Course</Listed>
                        <Listed>AltSchool Africa Cloud Engineering</Listed>
                        <Listed>Andela X PluralSight Cloud Engineering</Listed>
                </BioSection>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤
                    </Heading>
                    <Paragraph>Art, Adventure, {' '} <Link href='https://www.canva.com/your-projects'>Design </Link>, Good Food, Reading, {' '}
                    <Link href='https://www.figma.com/files/recent?fuid=807412097579325521'>UX Design</Link>
                    </Paragraph>
                </Section>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Catch Me Here 😎
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/Omo-Gbadamson'  target='_blank'>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@Omo-Gbadamson</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.linkedin.com/in/gbadamson6/'  target='_blank'>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>Abubakar Gbadamosi</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://twitter.com/GbadamsonJ'  target='_blank'>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>@GbadamsonJ</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://medium.com/@gbadamosi.abubakar.95'  target='_blank'>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoMedium}/>}>Abubakar Gbadamosi</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://discord.com/channels/@me'  target='_blank'>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord}/>}>GbadamsonJr😎</Button>
                        </Link>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem href="https://www.youtube.com/channel/UCxeXNrJNr0J-CIHGcn41tDA"
                    title="Mosh is A Dec"
                    thumbnail={Moshtube}
                    >
                        My Youtube Channel
                    </GridItem>
                    <GridItem href="https://realdubai.vercel.app/"
                    title="HouseBen"
                    thumbnail={HouseBen}
                    >
                        My Youtube Channel
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
       </Layout>
    )
}

export default Page