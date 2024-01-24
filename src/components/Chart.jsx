import { BarChart } from '@mantine/charts';
import { Center } from '@mantine/core';

const chart = ({ data }) => {

    return (
        <Center>
            <BarChart
                h="500px"
                data={data}
                dataKey="year"
                series={[
                    { name: 'EUR' }
                ]}
                tickLine="y"
            />
        </Center>
    )
}

export default chart