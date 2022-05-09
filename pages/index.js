import { useState } from 'react';
import Head from 'next/head'
import {
  Grid,
  Button,
  useMediaQuery,
} from '@mui/material/';
import {
  useTheme,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import TicketItem from '../components/molecules/ticket-item';
import NewTicketDialog from '../components/molecules/new-ticket-dialog';
import styles from './home.module.scss';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const data = [
  {product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
  {product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
  {product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
  {product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
  {product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}
];

export default function Home() {
  const theme = useTheme();
  const [tickets, setTickets] = useState(data);
  const [newTicketDialog, setNewTicketDialog] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const deleteHandler = index => {
    tickets.splice(index, 1);
    setTickets([...tickets]);
    console.log(index, 'deleted', tickets);
  };

  const addHandler = newTicket => {
    setTickets([...tickets, newTicket]);
    console.log(newTicket, 'added', tickets);
  };

  return (
    <div className="container">
      <Head>
        <title>Cynax Ticket App</title>
        <link rel="icon" href="/MH-Logo.ico" />
      </Head>

      <ThemeProvider theme={lightTheme}>
        <h3 className={styles.heading}>Available Tickets</h3>
        <Grid container spacing={3}>
          {tickets.map((ticket, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <TicketItem ticket={ticket} deleteHandler={() => deleteHandler(index)} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={styles.addTickets}
          onClick={() => setNewTicketDialog(true)}
        >
          Add Ticket
        </Button>
        <div className={styles.deleteInfo}>(*Hover the tickets to delete)</div>
        <NewTicketDialog
          open={newTicketDialog}
          fullScreen={fullScreen}
          onClose={() => setNewTicketDialog(false)}
          onSubmit={addHandler}
        />
      </ThemeProvider>
    </div>
  )
}
