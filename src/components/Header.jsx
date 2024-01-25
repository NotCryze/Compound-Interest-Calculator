import { useMantineColorScheme, Group, Container, Button, Text, Flex } from "@mantine/core"
import { IconSun, IconMoon } from '@tabler/icons-react';

const Header = () => {
    const { setColorScheme } = useMantineColorScheme();
    return (
        <Container h="100%">
            <Flex justify="space-between" align="center" h="100%">
                <Text size="xl" >
                    <Text span c="grape">C</Text>ompound&nbsp;
                    <Text span c="grape">I</Text>nterest&nbsp;
                    <Text span c="grape">C</Text>alculator&nbsp;
                </Text>
                <Button variant="outline" onClick={() => setColorScheme('dark')} darkHidden><IconMoon></IconMoon></Button>
                <Button variant="outline" onClick={() => setColorScheme('light')} lightHidden><IconSun></IconSun></Button>
            </Flex>
        </Container>
    )
}

export default Header