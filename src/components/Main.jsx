import { Center, Container, Grid, Paper, Text } from "@mantine/core"
import Calculator from "./Calculator"
import Chart from "./Chart"
import { useState } from 'react'


const main = ({ }) => {
    const [chartData, setChartData] = useState([])
    const [total, setTotal] = useState(0)
    const [final, setFinal] = useState(0)
    const [taxes, setTaxes] = useState(0)

    function handleCalculate(data, total, final, taxes) {
        setChartData(data)
        setTotal(total)
        setFinal(final)
        setTaxes(taxes)
    }

    return (
        <Container>
            <Grid>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Calculator onCalculate={handleCalculate} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 9 }}>
                    <Grid mb="1rem">
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Paper p="md" withBorder>
                                <Center>
                                    <div>
                                        <Text c="dimmed">Total Investment</Text>
                                        <Text ta="center" fw="500">{total} €</Text>
                                    </div>
                                </Center>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Paper p="md" withBorder>
                                <Center>
                                    <div>
                                        <Text c="dimmed">Total Amount</Text>
                                        <Text ta="center" fw="500">{final} €</Text>
                                    </div>
                                </Center>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }}>
                            <Paper p="md" withBorder>
                                <Center>
                                    <div>
                                        <Text c="dimmed">Total Taxes</Text>
                                        <Text ta="center" fw="500">{taxes} €</Text>
                                    </div>
                                </Center>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                    <Chart data={chartData} />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default main