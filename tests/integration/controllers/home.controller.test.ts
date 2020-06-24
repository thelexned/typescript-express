import {Container} from "typedi";
import {HomeController} from "../../../src/controllers/home.controller";

describe('HomeController', () => {
    let homeController: HomeController;

    beforeEach(() => {
        homeController = Container.get(HomeController);
    });

    it('is created', () => {
        expect(homeController).toBeInstanceOf(HomeController);
    });

    describe('#index', () => {
        it('returns the welcome message', () => {
            expect(homeController.index()).toEqual('Welcome home!');
        });
    });
});