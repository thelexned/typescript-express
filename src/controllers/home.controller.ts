import {GreetingService} from "../services/greeting.service";
import {Controller, Get} from "routing-controllers";

@Controller()
export class HomeController {
    public constructor(private greetingService: GreetingService) {
    }

    @Get("/")
    public index() {
        return this.greetingService.greetNewcomer();
    }
}