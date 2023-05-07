class PhoneNumber {
    constructor(telNum) {
        this.telNum = telNum
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                if (this.telNum.startsWith('+38067') || this.telNum.startsWith('+38068'))
                    return `${this.telNum} - абонент Kyivstar`
                else if (this.telNum.startsWith('+38050') || this.telNum.startsWith('+38066'))
                    return `${this.telNum} - абонент Vodafone`
                else if (this.telNum.startsWith('+38063'))
                    return `${this.telNum} - абонент Lifecel`
            default:
                return `${this.telNum} - абонент не известен`
        }
    }
}
const tel = new PhoneNumber('+380503431234')
res1.innerText = String(tel)
