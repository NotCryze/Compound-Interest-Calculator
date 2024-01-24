import { Paper, Input, Button, NumberInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';

const calculator = ({ onCalculate }) => {

    const [deposit, setDeposit] = useInputState("")
    const [contribution, setContribution] = useInputState("")
    const [year, setYear] = useInputState("")
    const [expectedReturn, setExpectedReturn] = useInputState("")
    const [tax, setTax] = useInputState("")

    function handleCalculate() {
        let data = []
        let current = deposit
        let previouslyTaxedBalance = deposit
        let taxes = 0
        let paidTaxes = 0
        const interest = expectedReturn / 100
        const contributionFrequency = 12
        
        for (let currentYear = 1; currentYear <= parseInt(year); currentYear++) {
            const year = "Year " + currentYear
            current = current * (1 + interest) + ((contributionFrequency * contribution) * (1 + interest))
            
            if(tax > 0 && interest > 0){
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

        let totalInvestment = Math.round((deposit + (contribution * (year * 12))) * 100) / 100
        current = Math.round(current * 100) / 100
        paidTaxes = Math.round(paidTaxes * 100) / 100
        onCalculate(data, totalInvestment, current, paidTaxes)
    }


    return (
        <Paper radius="md" shadow='md' p="md" withBorder>
                <Input.Wrapper label="Initial deposit" error="" size="md" mb="1rem">
                    <NumberInput 
                    placeholder="€" 
                    value={deposit} 
                    onChange={setDeposit}
                    suffix=' €'
                    min={0}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Monthly Contribution" error="" size="md" mb="1rem">
                    <NumberInput 
                    placeholder="€" 
                    value={contribution} 
                    onChange={setContribution} 
                    suffix=' €'
                    min={0}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Years of growth" error="" size="md" mb="1rem">
                    <NumberInput 
                    placeholder="Years" 
                    value={year} 
                    onChange={setYear} 
                    min={1} 
                    max={100} 
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Estimated rate of return" error="" size="md" mb="1rem">
                    <NumberInput 
                    placeholder="%" 
                    value={expectedReturn} 
                    onChange={setExpectedReturn}
                    suffix=' %'
                    min={0}
                    />
                </Input.Wrapper>
                <Input.Wrapper label="Tax rate" error="" size="md" mb="1rem">
                    <NumberInput 
                    placeholder="%" 
                    value={tax} 
                    onChange={setTax}
                    suffix=' %'
                    min={0}
                    />
                </Input.Wrapper>
            <Button variant="filled" size="md" onClick={handleCalculate} fullWidth >Calculate</Button>
        </Paper>
    )
}

export default calculator