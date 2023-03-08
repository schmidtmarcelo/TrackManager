/*import User from '../models/user';
import Wallet from '../models/wallet';

class WalletController {
    store = async (req: any, res: any) => {
        const { userId } = req.params;
        const { description } = req.body;

        const user = await User.findByPk(userId);
        
        if (!user) res.send("Usuário não encontrado");

        const wallet = await Wallet.create({ description, userId });
        return res.json(wallet);
    }

    getAll = async (req: any, res: any) => {
        const { userId } = req.params;
        if (!userId) res.send("Usuário não encontrado");

        const user = await User.findByPk(userId, {
            include: Wallet,
        });

        return res.json(user);
    }

    put = async (req: any, res: any) => {
        const { name } = req.body;
        await Wallet.update(
            { name },
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send('Carteira atualizada!');
    }

    delete = async (req: any, res: any) => {
        await Wallet.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.send('Carteira removida!');
    }
};

export default new WalletController();*/
