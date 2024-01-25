import { BarChart } from '@mantine/charts';
import { Center, Paper } from '@mantine/core';

const chart = ({ data }) => {

    return (
        <Paper p="md" withBorder>
            <Center>
                <BarChart
                    h="500px"
                    data={data}
                    dataKey="year"
                    series={[
                        { name: 'EUR', color: "teal.5" },
                        { name: 'TAX', color: "red.6" }
                    ]}
                    tickLine="y"
                    type='stacked'
                />
            </Center>
        </Paper>
    )
}

export default chart