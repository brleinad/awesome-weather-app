import { TestBed } from '@angular/core/testing';

import { DataTracker } from './data-tracker';
import { isRegExp } from 'util';

describe('DataTrackerService', () => {
  let dataTracker: DataTracker;

  beforeEach(() => {
    dataTracker = new DataTracker();
  });

  it('should be created', () => {
    expect(dataTracker).toBeTruthy();
  });


  it('should show min', () => {
    dataTracker.insert(33);
    dataTracker.insert(23);
    dataTracker.insert(3);
    expect(dataTracker.showMin()).toEqual(3);
  })

  it('should show max', () => {
    dataTracker.insert(33);
    dataTracker.insert(23);
    dataTracker.insert(3);
    expect(dataTracker.showMax()).toEqual(33);
  })

  it('should show mean', () => {
    dataTracker.insert(10);
    dataTracker.insert(20);
    expect(dataTracker.showMean()).toEqual(15);
  })

  it('should show mode', () => {
    dataTracker.insert(10);
    dataTracker.insert(10);
    dataTracker.insert(20);
    expect(dataTracker.showMode()).toEqual(10);
  })
});
