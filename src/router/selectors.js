
const getRouter = ({ router }) => router;

const getTitle = ({ router }) => (router.result ? router.result.title : 'Do It');

const getPathName = ({ router }) => router.pathname;


export default {
  getRouter,
  getPathName,
  getTitle,
};
