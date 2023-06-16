import { stringify } from 'qs';

export const queryToString = (query: Record<string, unknown> | undefined): string => {
    return query
        ? stringify(query, {
              addQueryPrefix: true,
              encode: true,
              arrayFormat: 'repeat'
          })
        : '';
};
