const ValidPassword = () => <h1>Password is valid</h1>
const InvalidPassword = () => <h1>Password is invalid</h1>

const password = ({isValid}) => {
    if(isValid){
        return <ValidPassword />
    }
    
    return <InvalidPassword />
}