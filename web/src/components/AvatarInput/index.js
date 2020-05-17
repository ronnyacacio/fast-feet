import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { MdInsertPhoto } from 'react-icons/md';

import api from '~/services/api';
import random from '~/utils/randomNumber';

import { Container } from './styles';

export default function AvatarInput({ initials }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container initialColors={random()} initials={initials}>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="Avatar do Entregador" />
        ) : (
          <>
            <div>
              {initials ? (
                <div className="initials">
                  <p>{initials}</p>
                </div>
              ) : (
                <>
                  <MdInsertPhoto size={44} color="#ddd" />
                  <strong>Adicionar foto</strong>
                </>
              )}
            </div>
          </>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  initials: PropTypes.string.isRequired,
};
