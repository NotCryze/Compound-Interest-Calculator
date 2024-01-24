import { Container, Grid } from "@mantine/core"
import Calculator from "./Calculator"
import Chart from "./Chart"
import { useState } from 'react'


const main = ({ }) => {
    const [chartData, setChartData] = useState([])

    function handleCalculate(data) {
        setChartData(data)
    }

    return (
        <Container>
            <Grid>
                <Grid.Col span={{base: 12, md: 3}}>
                    <Calculator onCalculate={handleCalculate} />
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 9}}>
                    <Chart data={chartData} />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default main