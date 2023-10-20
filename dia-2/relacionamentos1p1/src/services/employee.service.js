// src/services/employee.service.js

const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

// eager loading:
const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      // a propriedade attributes exclui o campo 'number' do retorno da requisição
      include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number']} }],
    });
  return employee;
}

// lazy loading:
// const getById = async (id) => {
//   const employee = await Employee.findOne({
//     where: { id },
//   });
//   return employee;
// }

module.exports = { getAll, getById };