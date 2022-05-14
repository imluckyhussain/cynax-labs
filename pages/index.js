import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Grid, Button } from '@mui/material';
import TicketItem from '../components/molecules/ticket-item';
import NewTicketDialog from '../components/molecules/new-ticket-dialog';
import data from '../data.json';
import styles from './home.module.scss';

export default function Home({ fullScreen }) {
  const [tickets, setTickets] = useState(data);
  const [newTicketDialog, setNewTicketDialog] = useState(false);

  useEffect(() => setTickets(data), [data]);

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
    <div className={styles.container}>
      <Head>
        <title>Cynax Ticket App</title>
        <link rel="icon" href="/MH-Logo.ico" />
      </Head>

      <h3 className={styles.heading}>Available Tickets</h3>
      <Grid className={styles.tickets} container spacing={3}>
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
    </div>
  )
}
