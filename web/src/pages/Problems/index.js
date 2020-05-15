import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import Options from './Options';
import { Container, ProblemList, Loading, Scroll, ProblemItem } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProblems() {
      setLoading(true);
      const deliveries = await api.get('deliveries/problems');
      deliveries.data.forEach(async (delivery) => {
        const response = await api.get(`deliveries/${delivery.id}/problems`);
        setProblems(...problems, response.data);
      });
      setLoading(false);
    }
    loadProblems();
  }, []);

  return (
    <Container>
      <strong>Problemas na entrega</strong>
      <ProblemList>
        <header>
          <strong>ID</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </header>
        {loading ? (
          <Loading size={50} color="#7d40e3" loading={loading} />
        ) : (
          <Scroll>
            {problems.map((problem) => (
              <ProblemItem>
                <span>{`#${problem.delivery_id}`}</span>
                <p>{problem.description}</p>
                <Options problem={problem} />
              </ProblemItem>
            ))}
          </Scroll>
        )}
      </ProblemList>
    </Container>
  );
}
