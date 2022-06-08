import HandlerInterface from "../../@shared/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";

export default class LogWhenCustomerChangeAddressHandler
  implements HandlerInterface<CustomerChangeAddressEvent>
{
  handle(event: CustomerChangeAddressEvent) {
    console.log(
      `Customer changed address: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address}`
    );
  }
}
