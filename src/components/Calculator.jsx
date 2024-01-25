import { Paper, Input, Button, NumberInput } from '@mantine/core';
import { useForm } from "@mantine/form"

const Calculator = ({ onCalculate }) => {

    function handleCalculate(values) {
        let data = []
        let current = values.deposit
        let previouslyTaxedBalance = values.deposit
        let taxes = 0
        let paidTaxes = 0
        const interest = values.interest / 100
        const contributionFrequency = 12
        const years = values.years
        const contribution = values.contribution
        const tax = values.tax
        const deposit = values.deposit

        for (let currentYear = 1; currentYear <= parseInt(years); currentYear++) {
            const year = "Year " + currentYear
            current = current * (1 + interest) + ((contributionFrequency * contribution) * (1 + interest))

            if (tax > 0 && interest > 0) {
                taxes = (current - previouslyTaxedBalance - (contributionFrequency * contribution)) * tax / 100
                current = (current - taxes)
            }

            previouslyTaxedBalance = current
            paidTaxes += taxes

            data.push({
                year: year,
                EUR: Math.round(current * 100) / 100,
                TAX: Math.round(taxes * 100) / 100
            })
        }

        let totalInvestment = Math.round((deposit + (contribution * (years * 12))) * 100) / 100
        current = Math.round(current * 100) / 100
        paidTaxes = Math.round(paidTaxes * 100) / 100
        onCalculate(data, totalInvestment, current, paidTaxes)
    }

    const form = useForm({
        initialValues: {
            deposit: 0,
            contribution: 0,
            years: 1,
            interest: 0,
            tax: 0
        },

        validate: {
            deposit: (value) => value >= 0 ? null : 'Initial deposit must be 0 or greater than 0',
            contribution: (value) => value >= 0 ? null : 'Monthly Contribution must be 0 or greater than 0',
            years: (value) => value >= 1 ? null : 'Years of growth must be 1 or greater than 1 and may not exceed 100',
            interest: (value) => value >= 0 ? null : 'Estimated rate of return must be 0 or greater than 0',
            tax: (value) => value >= 0 ? null : 'Tax rate must be 0 or greater than 0'
        }
    })

    return (
        <Paper radius="md" shadow='md' p="md" withBorder>
            <form onSubmit={form.onSubmit((values) => {handleCalculate(values)})}>
                <Input.Wrapper label="Initial deposit" error="" size="md" mb="1rem">
                    <NumberInput
                        placeholder="€"
                        suffix=' €'
                        min={0}
                        {...form.getInputProps('deposit')}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Monthly Contribution" error="" size="md" mb="1rem">
                    <NumberInput
                        placeholder="€"
                        suffix=' €'
                        min={0}
                        {...form.getInputProps('contribution')}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Years of growth" error="" size="md" mb="1rem">
                    <NumberInput
                        placeholder="Years"
                        min={1}
                        max={100}
                        {...form.getInputProps('years')}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Estimated rate of return" error="" size="md" mb="1rem">
                    <NumberInput
                        placeholder="%"
                        suffix=' %'
                        min={0}
                        {...form.getInputProps('interest')}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Tax rate" error="" size="md" mb="1rem">
                    <NumberInput
                        placeholder="%"
                        suffix=' %'
                        min={0}
                        {...form.getInputProps('tax')}
                    />
                </Input.Wrapper>
                <Button variant="filled" size="md" type="submit" fullWidth >Calculate</Button>
            </form>
        </Paper>
    )
}

export default Calculator