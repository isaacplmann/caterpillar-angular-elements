import { async, TestBed } from '@angular/core/testing';
import { TestServicesModule } from './test-services.module';

describe('TestServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestServicesModule).toBeDefined();
  });
});
