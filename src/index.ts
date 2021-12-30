import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Product } from "./entity/Product";
import { User } from "./entity/User";

createConnection().then(async connection => {

  const userRepository = getRepository(User)
  const productRepository = getRepository(Product)

  // const users = await userRepository.findOne(2)
  // users.description='AAAAAA'
  // await userRepository.insert(users)
// const long =await userRepository.delete(4)
//   console.log(long);

// const linh = await userRepository.createQueryBuilder().where({age:23}).getMany()
//   console.log(linh);

// const products = new Product();
// products.name = 'Quan'
// products.price = 2
// await productRepository.save(products)
//  const len = await productRepository.findOne(1)
//     len.handsome = '37-Store'
//     await productRepository.save(len)

    const user = await userRepository.findOne(2)
    user.description = 'ABC'
    await userRepository.save(user)

}).catch(error => console.log(error));
