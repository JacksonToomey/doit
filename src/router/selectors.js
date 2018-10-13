
const getRouter = ({ router }) => router;

const getTitle = ({ router }) => (router.result ? router.result.title : 'Do It');

const getPathName = ({ router }) => router.pathname;

const getPrevious = ({ router }) => router.previous;

const getParams = ({ router }) => router.params;


export default {
  getRouter,
  getPathName,
  getTitle,
  getPrevious,
  getParams,
};
