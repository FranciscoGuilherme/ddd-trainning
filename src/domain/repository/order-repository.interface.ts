import { Order } from "sequelize/types";
import RepositoryInterface from "./repository-interface";

export default interface OrderInterface extends RepositoryInterface<Order> {}
