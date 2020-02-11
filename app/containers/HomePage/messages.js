/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  tableHeader: {
    id: `${scope}.home.tableHeader`,
    tableHeader: 'Data Table Component!',
  },
  filterText: {
    id: `${scope}.home.filter`,
    filter: 'Filter!',
  },
  loadMoreData: {
    id: `${scope}.home.loadMoreData`,
    loadMoreData: 'LOAD MORE DATA',
  },
});
