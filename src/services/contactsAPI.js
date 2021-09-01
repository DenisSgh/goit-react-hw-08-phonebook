import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

export async function fetchAllContacts() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function postContact(name, number) {
  const { data } = await axios.post(`/contacts`, { name, number });

  return data;
}

export async function deleteContactById(id) {
  await axios.delete(`/contacts/${id}`);

  return id;
}
