import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function DashBoard() {
    return (
        <Container>
            <Summary></Summary>
            <TransactionsTable></TransactionsTable>
        </Container>
    )
}