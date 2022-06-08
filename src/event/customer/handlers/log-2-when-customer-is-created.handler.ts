import HandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class Log2WhenCustomerIsCreatedHandler implements HandlerInterface<CustomerCreatedEvent> {
  handle(event: CustomerCreatedEvent): void {
    console.log('Customer created!');
  }
}
