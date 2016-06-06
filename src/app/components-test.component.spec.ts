import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentsTestAppComponent } from '../app/components-test.component';

beforeEachProviders(() => [ComponentsTestAppComponent]);

describe('App: ComponentsTest', () => {
  it('should create the app',
      inject([ComponentsTestAppComponent], (app: ComponentsTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'components-test works!\'',
      inject([ComponentsTestAppComponent], (app: ComponentsTestAppComponent) => {
    expect(app.title).toEqual('components-test works!');
  }));
});
