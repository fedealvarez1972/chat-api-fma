const { Conversations, Participants, Users, Messages } = require("../models");

const createConversation = async (req, res, next) => {
  try {
    // body: { createdBy: 2, participant: 4  }
    const { title, createdBy, participants, type } = req.body;
    // crear la conversacion
    const conversation = await Conversations.create({ title,createdBy, type });
    // conversation = { id, title, creattedBy, type, createdAt, updatedAt}
    // tomar el id de la conversacion creada y agreagar a los participantes
    const { id } = conversation;
    // agregar a los participantes en la tabla pivote
    const participitantsArray = participants.map((participant) => ({
      userId: participant,
      conversationId: id,
    }));
    participitantsArray.push({ userId: createdBy, conversationId: id });
    await Participants.bulkCreate(participitantsArray);

    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const deleteConversation = async (req, res, next) => {
  try {
    const { id } = req.params;
    // antes de eliminar la conversacion 3
    // elimino todos los registros en participantes que usen ese id
    await Conversations.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const getAllConversationsUsers = async (req, res, next) => {
  try {
    
    const conversation = await Conversations.findAll({
      
      include: {
        model: Users,
        attributes: {
          exclude: ["firstname", "lastname", "email", "password", "profileImage", "validEmail"]
        }
      }
    });
    res.json(conversation);


  } catch (error) {
    next(error);
  }
}

const getAllConversationsParticipantsMessage = async (req, res, next) =>{
  try {
    const {id} = req.params;
    const conversation = await Conversations.findByPk(id, {
    attributes: {
      exclude: ["createdBy"]
    },
    include: [
      {
        model: Users,
        attributes: ["id", "email", "password", "firstname", "lastname"],
      },
    
      {
        model: Messages,
      },
    ]
    })

    res.json(conversation)

  } catch (error) {
    next(error);
  }
  
};


module.exports = {
  createConversation,
  deleteConversation,
  getAllConversationsUsers,
  getAllConversationsParticipantsMessage,
};

