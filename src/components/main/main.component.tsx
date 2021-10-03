import { Card, Container } from "react-bootstrap"

export const Main = () => {
    return (<div style={{"display":"flex","flexFlow": "row wrap"}}>
        <Container>
            <div className="mb-3 mt-3" style={{"background": "red", flex:1}}>
                    Annonce
            </div>
            <div className="mb-3 mt-3" style={{"background": "red", flex:1}}>
                    Annonce
            </div>
        </Container>
        </div>)
}