import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IHelloResponse } from './interfaces';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it("should return { message: 'General Kenobi!' }", () => {
      const expectedObject: IHelloResponse = { message: 'General Kenobi!' };

      expect(appController.getHello()).toMatchObject(expectedObject);
    });
  });
});
