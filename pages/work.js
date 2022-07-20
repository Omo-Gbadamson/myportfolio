import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Real from '../public/images/works/real.png'
import rps from '../public/images/works/rps.png'
import snkg from '../public/images/works/pygame.png'
import aitest from '../public/images/works/ai.jpg'
import bcw from '../public/images/works/starterfarza.png'


const Works =()=> {
    return (
        <Container>
           <Heading as="h3" fontSize={20} mb={4}>
            Works
           </Heading>
           <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.3}>
                <WorkGridItem id="real" title="RealDubai" thumbnail={Real}>
                    Real Estate Web App, A platfrom where properties Sellers can either lease out or sell out properties for ready buyers or borrowers
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="rps" title="RockPaperScissors" thumbnail={rps}>
                    Rock Paper Scissors, A simple game built with an ASCII random coding to implememt the performance and visibilty
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="sng" title="SnakeGame" thumbnail={snkg}>
                    Using the turtle library to flex around with the python skills
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="ai" title="AI_Testing" thumbnail={aitest}>
                    Using the Azure Cognitive service, I was able to test and detect the handome page in the picture, 😂, it was partial tho...
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="bc" title="BlockChainWave" thumbnail={bcw}>
                    Wrote a solidity contract under the ethereum blockchain to be able to send some fictitious ethereum to people who uses the platform
                </WorkGridItem>
            </Section>
           </SimpleGrid>
           <Section delay={0.4}>
                <Divider my={6}/>

                <Heading as="h3" fontSize={20} mb={4}>
                    Other Works
                </Heading>
           </Section>
        </Container>
    )
}

export default Works