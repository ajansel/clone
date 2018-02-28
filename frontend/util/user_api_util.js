export const getUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};

export const getUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/users/`,
  });
};

export const postUser = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};
