import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProblemRequest } from '~/store/modules/problem/actions';
import { Header, Scroll, Loading, Options } from '~/components';
import { Container, ProblemList, ProblemItem } from './styles';

export default function Problems() {
  const problems = useSelector((state) => state.problem.problems);
  const loading = useSelector((state) => state.problem.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProblemRequest());
  }, [dispatch]);

  return (
    <>
      <Header currentPage="PROBLEMS" />
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
              {problems.length > 0 ? (
                problems.map((problem) => (
                  <ProblemItem key={problem._id}>
                    <span>{`#${problem.delivery_id}`}</span>
                    <p>{problem.description}</p>
                    <Options problem={problem} namePage="encomenda" />
                  </ProblemItem>
                ))
              ) : (
                <p>Nenhum problema cadastrado :)</p>
              )}
            </Scroll>
          )}
        </ProblemList>
      </Container>
    </>
  );
}
