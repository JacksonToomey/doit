
const getRouter = ({ router }) => router;

const getTitle = ({ router }) => (router.result ? router.result.title : 'Do It');


export default {
  getRouter,
  getTitle,
};
