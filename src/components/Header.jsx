import { Group, Container, UnstyledButton, Modal } from "@mantine/core"
import { IconSettings } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Container>
            <Group justify="space-between">
                <h4>Compound Interest Calculator</h4>
                <UnstyledButton onClick={open}><IconSettings></IconSettings></UnstyledButton>
                <Modal opened={opened} onClose={close} title="Settings" centered>
                    {
                        
                    }
                </Modal>
            </Group>
        </Container>
    )
}

export default header