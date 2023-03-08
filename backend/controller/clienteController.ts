import Cliente from '../models/cliente';

class ClienteController {

    getAll = async (req: any, res: any) => {
        const clientes = await Cliente.findAll();
        return res.json(clientes);
    }

};

export default new ClienteController();