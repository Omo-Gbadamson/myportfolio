import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from '../components/section'
import { GridItem } from "../components/grid-item";

import lappy from '../public/images/contents/lappyjpg.jpg'
import zap from '../public/images/contents/deployd.jpg'
import pat from '../public/images/contents/internet.jpg'

const Posts=()=>(
    <Layout title="posts">
        <Container>
            <Heading as ="h4" fontSize={20} mb={4}>Popular Posts</Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="Next Gen" thumbnail={lappy} href="https://medium.com/@gbadamosi.abubakar.95/the-next-generation-3245a37bff45"/>
                    <GridItem title="Big Pic" thumbnail={zap} href="https://medium.com/@gbadamosi.abubakar.95/the-big-picture-looking-small-71ea8c7aa89c"/>
                    <GridItem title="UX & Life" thumbnail={pat} href="https://medium.com/@gbadamosi.abubakar.95/ux-design-and-life-4ee12e039103"/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
) 

export default Posts