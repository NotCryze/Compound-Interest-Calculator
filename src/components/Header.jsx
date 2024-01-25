import { useMantineColorScheme, Group, Container, UnstyledButton, Modal, Button } from "@mantine/core"
import { IconSettings, IconSun, IconMoon } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const Header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { setColorScheme, clearColorScheme } = useMantineColorScheme();
    return (
        <Container>
            <Group justify="space-between">
                <h4>Compound Interest Calculator</h4>
                <Button variant="outline" onClick={() => setColorScheme('dark')} darkHidden><IconMoon></IconMoon></Button>
                <Button variant="outline" onClick={() => setColorScheme('light')} lightHidden><IconSun></IconSun></Button>
                {/* <UnstyledButton onClick={open}><IconSettings></IconSettings></UnstyledButton>
                <Modal opened={opened} onClose={close} title="Settings" centered>
                    {
                        
                    }
                </Modal> */}
            </Group>
        </Container>
    )
}

export default Header