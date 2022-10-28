import { TestBed } from '@angular/core/testing';
import { ListOfIssuersService } from '@layout/pages/list-of-issuers/list-of-issuers.service';
import { OfficialListCols } from '@layout/pages/list-of-issuers/official-list-table/official-list-cols';
import { OfficialListColsSettings } from '@layout/pages/list-of-issuers/official-list-table/official-list-cols-settings';
import { OfficialListValuesSettings } from '@layout/pages/list-of-issuers/official-list-table/official-list-values-settings';
import { ContactService } from './contacts.service';

describe('ContactsService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ ContactService] });
    service = TestBed.inject(ContactService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: 'Контакты',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: 'Реквизиты',
        translateCode: '',
        link: 'board',
        active: false
      }
    ]);
  });

 
});
