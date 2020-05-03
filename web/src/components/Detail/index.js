import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4,
  },
}));

export default function Detail({ open, handleClose, delivery }) {
  const classes = useStyles();

  // console.log(delivery.start_date);

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const startDate = utcToZonedTime(delivery.start_date, timezone);

  // const startDateFormatted = format(startDate, "d'/'MM'/'yyyy", { locale: pt });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container className={classes.paper}>
          <p>Informações da encomenda</p>
          <span>{`${delivery.recipient.street}, ${delivery.recipient.number}`}</span>
          <span>{`${delivery.recipient.city} - ${delivery.recipient.state}`}</span>
          <span>{delivery.recipient.cep}</span>
          <hr />
          <p>Datas</p>
          <div>
            <strong>Retirada: </strong>
            <span>{delivery.start_date}</span>
          </div>
          <div>
            <strong>Entrega: </strong>
            <span>{delivery.end_date}</span>
          </div>
          <hr />
          <p>Assinatura do destinatário</p>
          {delivery.signature ? (
            <img src={delivery.signature} alt="Assinatura" />
          ) : (
            <></>
          )}
        </Container>
      </Fade>
    </Modal>
  );
}
