import { Sequelize } from "sequelize";
import Cliente from "../models/cliente";
import ClienteAnual from "../models/cliente_anual";
const { Op } = require('sequelize');

class ClienteAnualController {

    /*getAll = async (req: any, res: any) => {
        const clientesAnuais = await ClienteAnual.findAll({
            include: [{
                model: Cliente,
                as: 'clienteAssociation',
                attributes: ['nome_empresa', 'nome_fantasia', 'chip_m2m'],

            }],
        });
        return res.json(clientesAnuais);
        /*return res.json(clientesAnuais.map((clienteAnual) => ({
            ...clienteAnual.toJSON(),
            key: clienteAnual.id, // adiciona o ID como atributo "key"
        })));
    }*/

    getAll = async (req: any, res: any) => {
        const clientesAnuais = await ClienteAnual.findAll({
          include: [{
            model: Cliente,
            as: 'clienteAssociation',
            attributes: [],
          }],
          attributes: [
            'id',
            'chip_ccid',
            [Sequelize.col('clienteAssociation.nome_empresa'), 'nome_empresa'],
            [Sequelize.col('clienteAssociation.chip_m2m',), 'chip_m2m'],
            'operadora',
            'valor',
            'data_da_compra',
            'status_do_pagamento',
            'proxima_cobranca',
          ],
          raw: true,
        });
        return res.json(clientesAnuais);
      };

    get2023 = async (req: any, res: any) => {
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-12-31');
        const clientesAnuais = await ClienteAnual.findAll({
            include: [{
                model: Cliente,
                as: 'clienteAssociation',
                attributes: ['nome_empresa', 'nome_fantasia', 'chip_m2m'],

            }],
            where: {
                proxima_cobranca: {
                    [Op.between]: [startDate, endDate],
                },
            },
        });
        return res.json(clientesAnuais);
    }
    /*store = async (req: any, res: any) => {
        const { name } = req.body;

        const user = await User.create({ name });
        return res.json(user);
    }*/



    /*put = async (req: any, res: any) => {
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
        await ClienteAnual.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.send('Cliente Anual removido!');
    }*/
};

export default new ClienteAnualController();