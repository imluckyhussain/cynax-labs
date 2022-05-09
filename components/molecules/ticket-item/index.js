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
  return (
    <Item elevation={6} className={cn(styles.box, styles[ticket.type])}>
      <div className={styles.ticketDetails}>
        {
          ticket.type === 'food' ? <RestaurantMenuIcon /> : 
          (ticket.type === 'drinks' ? <LocalCafeIcon /> : undefined)
        }
        {`${ticket.product.toUpperCase()} (${ticket.quantity} left)`}
        <Divider orientation='vertical' className={styles.divider} />
        {`$${ticket.unitPrice}/unit`}
      </div>
      <IconButton size="medium" onClick={deleteHandler} className={styles.closeBtn}>
        <Tooltip title="Delete Ticket"><Close /></Tooltip>
      </IconButton>
    </Item>
  )
}
