import { TestBed } from '@angular/core/testing';

import { PurchaseService } from './purchase.service';

describe('PurphaseService', () => {
  let service: PurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PurchaseService] });
    service = TestBed.inject(PurchaseService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: '2021',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: '2020',
        translateCode: '',
        link: 'board',
        active: false
      },
      {
        header: '2019',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: '2018',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: '2017',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: '2016',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: '2015',
        translateCode: '',
        link: 'director',
        active: false
      }
    ]);
  });

 
});
