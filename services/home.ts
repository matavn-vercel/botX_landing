import { api } from 'services/api';

class ListServices {
  handleGetListCategory = () => {
    return api.get('category-story');
  };
}

const listServices = new ListServices();

export default listServices;
