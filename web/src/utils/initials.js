export default (name) => {
  const quebra = name.split(' ');

  const pL = quebra[0].charAt(0);
  const sL = quebra[1].charAt(0);

  return `${pL}${sL}`.toUpperCase();
};
