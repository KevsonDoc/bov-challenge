export default function farmerViewJson(farmer) {
  return {
    id: farmer.id,
    name: farmer.name,
    email: farmer.email,
    cpf: farmer.cpf,
    createdAt: farmer.createdAt,
    updatedAt: farmer?.updatedAt,
    deletedAt: farmer?.deletedAt,
  };
}
