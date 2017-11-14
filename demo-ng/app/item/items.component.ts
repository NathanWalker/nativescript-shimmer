import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    public enabled = true;

    public toggle() {
        this.enabled = !this.enabled;
    }
}