import * as API from '@libs/API';
import {READ_COMMANDS} from '@libs/API/types';
import * as SearchUtils from '@libs/SearchUtils';

function search(query: string, offset: number) {
    const hash = SearchUtils.getQueryHash(query);
    API.read(READ_COMMANDS.SEARCH, {query, hash, offset});
}

export {
    // eslint-disable-next-line import/prefer-default-export
    search,
};
