import React, { useState } from 'react';
import {
  Input,
  Select,
  Button,
  Dialog,
  MenuItem,
  FormHelperText,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  InputLabel,
  Slide,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import styles from './new-ticket-dialog.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function NewTicketDialog({ fullScreen, open, onClose, onSubmit }) {
  const [type, setType] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [errorText, setErrorText] = useState('');
  const [savingFlag, setSavingFlag] = useState(false);

  const resetDialog = () => {
    onClose();
    setType('');
    setProduct('');
    setQuantity(0);
    setUnitPrice(0);
    setErrorText('');
    setSavingFlag(false);
  };

  const handleSubmit = () => {
    if (type && product && quantity > 0 && unitPrice > 0) {
      onSubmit({
        type,
        product,
        quantity,
        unitPrice,
      });
      resetDialog();
    } else {
      setErrorText('Please fill all the fields with valid inputs!');
    }
  };

  const saveTicket = async () => {
    await setSavingFlag(true);
    setTimeout(async () => {
      await setSavingFlag(false);
      handleSubmit();
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      className={styles.dialog}
      TransitionComponent={Transition}
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
              value={type}
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
            <Input
              type="number"
              id="quantity"
              defaultValue={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
          </FormControl>
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormControl variant="filled">
            <InputLabel htmlFor="unitPrice">Unit Price</InputLabel>
            <Input
              type="number"
              id="unitPrice"
              defaultValue={unitPrice}
              onChange={e => setUnitPrice(e.target.value)}
            />
          </FormControl>
        </FormGroup>
      </DialogContent>
      {errorText && (
        <FormHelperText className={styles.errorText} error>
          {errorText}
        </FormHelperText>
      )}
      <DialogActions>
        <Button onClick={resetDialog}>Cancel</Button>
        <LoadingButton
          loading={savingFlag}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          onClick={saveTicket}
        >
          Save Ticket
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}
