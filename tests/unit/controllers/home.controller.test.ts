import {HomeController} from "../../../src/controllers/home.controller";
import {GreetingService} from "../../../src/services/greeting.service";

describe('HomeController', () => {
    describe('#index', () => {
        it('returns the welcome message', () => {
            const greetingService = new GreetingService();
            const greeting = 'Test greeting';
            spyOn(greetingService, 'greetNewcomer').and.returnValue(greeting);
            const homeController = new HomeController(greetingService);
            expect(homeController.index()).toEqual(greeting);
        });
    })
});