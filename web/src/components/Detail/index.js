import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

import { Delivery, Problem } from './styles';

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

export default function Detail({ open, handleClose, delivery, problem }) {
  const classes = useStyles();

  function convertedDate(date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateConverted = utcToZonedTime(parseISO(date), timezone);

    const dateFormatted = format(dateConverted, "d'/'MM'/'yyyy", {
      locale: pt,
    });

    return dateFormatted;
  }

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
        {delivery ? (
          <Delivery className={classes.paper}>
            <p>Informações da encomenda</p>
            <span>{`${delivery.recipient.street}, ${delivery.recipient.number}`}</span>
            <span>{`${delivery.recipient.city} - ${delivery.recipient.state}`}</span>
            <span>{delivery.recipient.cep}</span>
            <hr />
            <p>Datas</p>
            <div>
              <strong>Retirada: </strong>
              <span>
                {delivery.start_date ? convertedDate(delivery.start_date) : ''}
              </span>
            </div>
            <div>
              <strong>Entrega: </strong>
              <span>
                {delivery.end_date ? convertedDate(delivery.end_date) : ''}
              </span>
            </div>
            <hr />
            <p>Assinatura do destinatário</p>
            {delivery.signature ? (
              <img src={delivery.signature.url} alt="Assinatura" />
            ) : (
              <></>
            )}
          </Delivery>
        ) : (
          <Problem className={classes.paper}>
            <strong>VIZUALIZAR PROBLEMA</strong>
            <p>{problem.description}</p>
          </Problem>
        )}
      </Fade>
    </Modal>
  );
}

Detail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  delivery: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    status: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    canceled_at: PropTypes.string,
    problem: PropTypes.bool,
    recipient: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      cep: PropTypes.string,
    }),
    deliveryman: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
    signature: PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      path: PropTypes.string,
    }),
  }),
  problem: PropTypes.shape({
    _id: PropTypes.string,
    delivery_id: PropTypes.number,
    description: PropTypes.string,
  }),
};

Detail.defaultProps = {
  delivery: null,
  problem: null,
};
