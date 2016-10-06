'use strict';
/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from '../src/app.component';

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;
let de:      DebugElement;
let el:      HTMLElement;

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Angular 2');
  });
});