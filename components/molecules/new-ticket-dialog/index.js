import { useState } from 'react';
import {
  Input,
  Select,
  Button,
  Dialog,
  MenuItem,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  InputLabel,
  FormHelperText,
} from '@mui/material/';
import styles from './new-ticket-dialog.module.scss';

export default function NewTicketDialog({ fullScreen, open, onClose, onSubmit }) {
  const [type, setType] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const handleSubmit = () => {
    onSubmit({
      type,
      product,
      quantity,
      unitPrice,
    });
    onClose();
    setType('');
    setProduct('');
    setQuantity(0);
    setUnitPrice(0);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
    >
      <DialogTitle>Add New Ticket</DialogTitle>
      <DialogContent>
        <FormGroup className={styles.formGroup}>
          <FormControl variant="filled">
            <InputLabel htmlFor="product">Product</InputLabel>
            <Input id="product" defaultValue={product} onChange={e => setProduct(e.target.value)} />
          </FormControl>
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormControl variant="standard">
            <InputLabel className={styles.typeLabel} id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              defaultValue={type}
              label="Type"
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value={'food'}>Food</MenuItem>
              <MenuItem value={'drinks'}>Drinks</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormControl variant="filled">
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input type="number" id="quantity" defaultValue={quantity} onChange={e => setQuantity(e.target.value)} />
          </FormControl>
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormControl variant="filled">
            <InputLabel htmlFor="unitPrice">Unit Price</InputLabel>
            <Input type="number" id="unitPrice" defaultValue={unitPrice} onChange={e => setUnitPrice(e.target.value)} />
          </FormControl>
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Save Ticket
        </Button>
      </DialogActions>
    </Dialog>
  )
}
