export const postSession = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/sessions',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/sessions',
  });
};

export const postUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};