import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should accept inputs', () => {
    // Arrange
    const style = 'primary';

    // Act
    component.style = style;
    fixture.detectChanges();

    // Assert
    const buttonEl: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(buttonEl.className).toContain(style);
  });

  it('should send a buttonClick event', done => {
    const buttonEl: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;

    component.buttonClick.subscribe(event => {
      expect(event instanceof MouseEvent).toBeTruthy();
      done();
    });

    buttonEl.click();
    fixture.detectChanges();
  });

  it('should verify onClick', () => {});
});
