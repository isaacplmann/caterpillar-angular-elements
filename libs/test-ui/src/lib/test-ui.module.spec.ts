import { async, TestBed } from '@angular/core/testing';
import { TestUiModule } from './test-ui.module';

describe('TestUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestUiModule).toBeDefined();
  });
});
