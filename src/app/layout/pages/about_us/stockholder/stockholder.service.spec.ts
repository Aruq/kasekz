import { TestBed } from '@angular/core/testing';

import { StockholderService } from './stockholder.service';

describe('StockholderService', () => {
  let service: StockholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StockholderService] });
    service = TestBed.inject(StockholderService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: 'Список акционеров',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: 'Информация для акционеров ',
        translateCode: '',
        link: 'board',
        active: false
    }
]);
});


});


      


 

