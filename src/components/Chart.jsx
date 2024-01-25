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
                    { name: 'EUR', color: "teal.5" },
                    { name: 'TAX', color: "red.6" }
                ]}
                tickLine="y"
                type='stacked'
            />
        </Center>
    )
}

export default chart