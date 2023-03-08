import User from '../models/user';

class UserController {
    store = async (req: any, res: any) => {
        const { name } = req.body;

        const user = await User.create({ name });
        return res.json(user);
    }

    getAll = async (req: any, res: any) => {
        const users = await User.findAll();
        return res.json(users);
    }

    put = async (req: any, res: any) => {
        const { name } = req.body;
        await User.update(
            { name },
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send('Usuário atualizado!');
    }

    delete = async (req: any, res: any) => {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.send('Usuário removido!');
    }
};

export default new UserController();
