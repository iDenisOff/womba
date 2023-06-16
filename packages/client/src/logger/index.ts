import debugResolve from './debugResolve';

const NAME_LOGGER_BY_DEFAULT = 'global';

export const debug = debugResolve(NAME_LOGGER_BY_DEFAULT);
