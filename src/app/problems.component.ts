import { Component }  from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'problems-component',
  template: `
  <div style="background: #eee; color:#777; padding:5px; margin:5px; ">
    <p>Preface:</p>
    <ul>
      <li>OutletA:Level1 works in 'Default+Named' component</li>
      <li>OutletB:Level2 works in 'Default+Named' component</li>
      <li>OutletA:Level1/Level2 works in 'Default+Named' component</li>
      <li>In 'Default+Named' empty button cleans outlet</li>
      <li>This is lazy loaded module. Load children works for primary outlet</li>
    </ul>
    <p>Bugs in 'Lazy':</p>
    <ul>
      <li>empty button navigates to 'lazy-named'</li>
    </ul>
    <p>Bugs in 'Lazy-named':</p>
    <ul>
      <li>loadChildren for outletA:Level1 not works</li>
      <li>loadChildren for outletB:Level2 not works</li>
      <li>empty button not works</li>
    </ul>
    <p>Other bugs:</p>
    <ul>
      <li>(path:'', component:EmptyComponent) required in children, even if children contains only named outles routes</li>
     </ul>
  </div>
  `
})
export class ProblemsComponent {

  constructor() {}
}