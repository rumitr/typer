import styled from "styled-components";

export const ScoresList = styled.ol`
  padding-left: 0;
  list-style: none;
`;

export const ScoreLI = styled.li`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const StyledTable = styled.table`
  margin-left: auto;
  margin-right: auto;

  td {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  td:first-child {
    text-align: left;
    min-width: 8em;
    min-height: 2em;
  }
`;
