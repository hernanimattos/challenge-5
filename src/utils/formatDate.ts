const formatDate = (value: Date): string => {
  let formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(new Date(value));
};

export default formatDate;
