import { useState } from 'react';
import cn from 'classnames';
import { Paper, IconButton, Tooltip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Close from '@mui/icons-material/Close';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import styles from './ticket-item.module.scss';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TicketItem({ ticket, deleteHandler }) {
  const [deleting, setDeleting] = useState(false);

  const deleteProcess = async () => {
    await setDeleting(true);
    setTimeout(async () => {
      await setDeleting(false);
      deleteHandler();
    }, 250);
  };

  return (
    <Item elevation={6} className={cn(styles.box, styles[ticket.type], deleting && styles.deleting)}>
      <div className={styles.ticketDetails}>
        {
          ticket.type === 'food' ? <RestaurantMenuIcon /> : 
          (ticket.type === 'drinks' ? <LocalCafeIcon /> : undefined)
        }
        <span className={styles.item}>{ticket.product.toUpperCase()}</span>
        &nbsp;{`(${ticket.quantity} left)`}
        <Divider orientation='vertical' className={styles.divider} />
        <span className={styles.amount}>${ticket.unitPrice}</span>/unit
      </div>
      <IconButton size="medium" onClick={deleteProcess} className={styles.closeBtn}>
        <Tooltip title="Delete Ticket"><Close /></Tooltip>
      </IconButton>
    </Item>
  )
}
