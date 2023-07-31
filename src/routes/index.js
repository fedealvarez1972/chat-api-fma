const userRoutes = require("./user.routes");
const conversationRoutes = require("./conversations.routes");
const messageRoutes = require("./message.routes");


const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(conversationRoutes);
  app.use(messageRoutes);
};

module.exports = apiRoutes;
