import { TestBed } from '@angular/core/testing';
import { ListOfIssuersService } from '@layout/pages/list-of-issuers/list-of-issuers.service';
import { OfficialListCols } from '@layout/pages/list-of-issuers/official-list-table/official-list-cols';
import { OfficialListColsSettings } from '@layout/pages/list-of-issuers/official-list-table/official-list-cols-settings';
import { OfficialListValuesSettings } from '@layout/pages/list-of-issuers/official-list-table/official-list-values-settings';
import { ManagementService } from './management.service';

describe('ManagementService', () => {
  let service: ManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ManagementService] });
    service = TestBed.inject(ManagementService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(service.tabs).toEqual([
      {
        header: 'Совет директоров',
        translateCode: '',
        link: 'director',
        active: false
      },
      {
        header: 'Правление',
        translateCode: '',
        link: 'board',
        active: false
      }
    ]);
  });

  it(`officialListCols has default value`, () => {
    expect(service.officialListCols).toEqual(OfficialListCols);
  });

  it(`officialListValues has default value`, () => {
    expect(service.officialListValues).toEqual([]);
  });

  it(`tableColsSettings has default value`, () => {
    expect(service.officialListColsSettings).toEqual(OfficialListColsSettings);
  });

  it(`tableValuesSettings has default value`, () => {
    expect(service.officialListValuesSettings).toEqual(OfficialListValuesSettings);
  });

  describe('start', () => {
    it('makes expected calls', () => {
      spyOn(service,'setCurrentTab').and.callThrough();
      service.start();
      expect(service.setCurrentTab).toHaveBeenCalled();
    });
  });
});
